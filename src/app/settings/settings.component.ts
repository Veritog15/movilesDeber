import { Component } from '@angular/core';
import { NavController } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  template: `
    <ion-content>
      <ion-button (click)="logout()">Cerrar Sesión</ion-button>
    </ion-content>
  `,
  standalone: true,
  imports: [IonicModule],
})
export class SettingsComponent {
  constructor(private navCtrl: NavController) {}

  logout() {
    localStorage.removeItem('authToken');
    this.navCtrl.navigateRoot('/auth');
  }
}