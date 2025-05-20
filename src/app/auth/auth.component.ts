import { Component } from '@angular/core';
import { NavController } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  template: `
    <ion-content>
      <ion-button (click)="login()">Iniciar Sesión</ion-button>
    </ion-content>
  `,
  standalone: true,
  imports: [IonicModule],
})
export class AuthComponent {
  constructor(private navCtrl: NavController) {}

  login() {
    localStorage.setItem('authToken', 'simulated-token');
    this.navCtrl.navigateRoot('/tabs/tab1');
  }
}