import { Component} from '@angular/core';
import {  RouterLink } from '@angular/router';
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
export class HomePage {
  isLoaderVisible: boolean = false;
  loaderImages: string[] = ['assets/charizar.png', 'assets/picachu.png'];
  loaderTexts: string[] = ['Loading...', 'Please wait...'];
  redirectPath: string = '/contact';

  showLoader() {
    this.isLoaderVisible = true;
  }

}
