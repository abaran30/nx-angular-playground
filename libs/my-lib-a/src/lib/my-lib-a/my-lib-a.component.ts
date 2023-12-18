import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-my-lib-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-lib-a.component.html',
  styleUrls: ['./my-lib-a.component.css'],
})
export class MyLibAComponent {}
export function getNumber(): number {
  return 0;
}
