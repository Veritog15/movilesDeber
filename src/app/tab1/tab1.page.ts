import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-tab1',
  template: `
    <ion-content>
      <div [@fadeAnimation]="state">
        <h1>Tab 1</h1>
      </div>
      <ion-button (click)="toggleState()">Toggle Animation</ion-button>
    </ion-content>
  `,
  standalone: true,
  imports: [IonicModule],
  animations: [
    trigger('fadeAnimation', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('500ms ease-in-out')),
    ]),
  ],
})
export class Tab1Page {
  state = 'visible';

  toggleState() {
    this.state = this.state === 'visible' ? 'hidden' : 'visible';
  }
}