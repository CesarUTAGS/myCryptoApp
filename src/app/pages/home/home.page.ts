import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonItem, 
  IonAvatar, 
  IonLabel,
  IonButtons,    
  IonMenuButton, 
  IonIcon, 
  NavController 
} from '@ionic/angular/standalone';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonButtons,
    IonMenuButton
]
})
export class HomePage implements OnInit {
  characters: any[] = [];

  constructor(
    private apiService: ApiService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.loadSimpsonCharacters();
  }

  loadSimpsonCharacters() {
    this.apiService.getCharacters().subscribe({
      next: (res: any) => {
        this.characters = res.docs; 
      },
      error: (err: any) => console.error('Error API:', err)
    });
  }

  verDetalle(personaje: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(personaje)
      }
    };
    this.navCtrl.navigateForward(['/details'], navigationExtras);
  }
}