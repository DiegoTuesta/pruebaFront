
import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer, Subscription, filter } from 'rxjs';

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
  private timerSubscription?: Subscription;
  private navigationSubscription: Subscription | undefined;
  constructor(private router: Router) {}

  ngOnInit() {
    if (this.images.length > 0 && this.texts.length > 0) {
      this.startImageRotation();

      this.navigationSubscription = this.router.events.pipe(
        filter(event => event.constructor.name === 'NavigationStart')
      ).subscribe(() => {
        this.stopImageRotation();
      });
    }
  }

  ngOnDestroy() {
    this.stopImageRotation();
  }

  private startImageRotation() {
    this.timerSubscription = timer(0, this.displayDuration).subscribe(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.currentText = this.texts[this.currentImageIndex];
    });

    setTimeout(() => {
      this.stopImageRotation();
      this.router.navigate([this.redirectPath]);
    }, this.timeLoading); 
  }

  private stopImageRotation() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.navigationSubscription?.unsubscribe();
    }
  }

 

}
