
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  standalone: true
})
export class LoadingComponent  implements OnInit, OnDestroy {

  @Input() images: string[] = [];
  @Input() texts: string[] = [];
  @Input() displayDuration: number = 3000; 
  @Input() redirectPath: string = '/home'; 
  @Input() timeLoading: number = 10000

  currentImageIndex: number = 0;
  currentText: string = '';
  private intervalId: any;
  private timeoutId: any;
  constructor(private router: Router) {}

  ngOnInit() {
    if (this.images.length > 0 && this.texts.length > 0) {
      this.startImageRotation();
    }
  }

  ngOnDestroy() {
    this.stopImageRotation();
  }

  private startImageRotation() {
    this.currentImageIndex = 0;
    this.currentText = this.texts[this.currentImageIndex];

    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.currentText = this.texts[this.currentImageIndex];
    }, this.displayDuration);

    this.timeoutId = setTimeout(() => {
      this.stopImageRotation();
      this.router.navigate([this.redirectPath]);
    }, this.timeLoading); 
  }

  private stopImageRotation() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
   
  }

 

}
