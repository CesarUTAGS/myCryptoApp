import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonButtons, IonMenuButton, IonAvatar, IonCard, 
  IonCardHeader, IonCardTitle, IonCardContent, IonBadge 
} from '@ionic/angular/standalone';
import { DataService } from '../../services/data'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, 
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonButtons, IonMenuButton, IonAvatar, IonCard, 
    IonCardHeader, IonCardTitle, IonCardContent, IonBadge
  ]
})
export class ProfilePage implements OnInit {
  usuario: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.currentUser.subscribe(user => {
      this.usuario = user;
    });
  }
}