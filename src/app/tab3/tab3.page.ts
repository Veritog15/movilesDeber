import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-tab3',
  template: `
    <ion-content>
      <div [@scaleAnimation]="state">
        <h1>Tab 3</h1>
        <p>Contenido de la pestaña 3</p>
      </div>
      <ion-button (click)="toggleState()">Toggle Animation</ion-button>
    </ion-content>
  `,
  standalone: true,
  imports: [IonicModule],
  animations: [
    trigger('scaleAnimation', [
      state('small', style({ transform: 'scale(0.5)' })),
      state('large', style({ transform: 'scale(1)' })),
      transition('small <=> large', animate('500ms ease-in-out')),
    ]),
  ],
})
export class Tab3Page {
  state = 'small';

  toggleState() {
    this.state = this.state === 'small' ? 'large' : 'small';
  }
}