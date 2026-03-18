import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class AboutPage {
  proyectoInfo = {
    nombre: 'My Simpson App / Los Simpson API Viewer',
    version: '1.0.0',
    desarrollador: 'Cesar Reynoso Morales 210003@utags.edu.mx',
    descripcion: 'Aplicación desarrollada con Ionic y Angular - Uso de APIs públicas para mostrar información de personajes de Rick & Morty y cotizaciones de criptomonedas.'
  };

  constructor() {}
}
