import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Quitamos RouterLinkActive
import { 
  IonApp, IonRouterOutlet, IonMenu, IonHeader, 
  IonToolbar, IonTitle, IonContent, IonList, 
  IonItem, IonIcon, IonLabel, IonMenuToggle 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, personOutline, informationCircleOutline, logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp, IonRouterOutlet, IonMenu, IonHeader, 
    IonToolbar, IonTitle, IonContent, IonList, 
    IonItem, IonIcon, IonLabel, IonMenuToggle,
    RouterLink // Solo dejamos RouterLink
  ],
})
export class AppComponent {
  constructor() {
    addIcons({ 
      'home-outline': homeOutline, 
      'person-outline': personOutline, 
      'info-icon': informationCircleOutline, 
      'logout-icon': logOutOutline 
    });
  }
}