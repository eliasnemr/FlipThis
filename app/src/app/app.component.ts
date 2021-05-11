import { Component } from '@angular/core';
import { Minima } from 'minima';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  app: string;

  constructor() {
    this.app = 'FlipThis';
    this.initMinima();
  }

  initMinima() {
    Minima.init((msg: any) => {
      if (msg.event === 'connected') {
        console.log(this.app + ': Minima is online.');
      }
    })
  }

}
