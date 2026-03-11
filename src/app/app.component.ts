import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonLabel, IonItem, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
