import { Component } from '@angular/core';
import { getNumber } from 'my-lib-a';

@Component({
  selector: 'nx-angular-playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = getNumber();
}
