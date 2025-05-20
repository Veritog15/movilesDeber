import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-tab2',
  template: `
    <ion-content>
      <div [@slideAnimation]="state">
        <h1>Tab 2</h1>
        <p>Contenido de la pestaña 2</p>
      </div>
      <ion-button (click)="toggleState()">Toggle Animation</ion-button>
    </ion-content>
  `,
  standalone: true,
  imports: [IonicModule],
  animations: [
    trigger('slideAnimation', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(100%)' })),
      transition('left <=> right', animate('500ms ease-in-out')),
    ]),
  ],
})
export class Tab2Page {
  state = 'left';

  toggleState() {
    this.state = this.state === 'left' ? 'right' : 'left';
  }
}