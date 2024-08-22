import { Component, OnDestroy, OnInit} from '@angular/core';
import {  NavigationEnd, Router, RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/angular/standalone';
import { LoadingComponent } from '../shared/loading/loading.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    RouterLink,
    LoadingComponent,
    IonCardContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
  ],
})
export class HomePage implements OnInit, OnDestroy {
  isLoaderVisible: boolean = false;
  loaderImages: string[] = ['assets/charizar.png', 'assets/picachu.png'];
  loaderTexts: string[] = ['Loading...', 'Please wait...'];
  redirectPath: string = '/contact';

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoaderVisible = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.isLoaderVisible = false;
  }

  showLoader() {
    this.isLoaderVisible = true;
  }

}
