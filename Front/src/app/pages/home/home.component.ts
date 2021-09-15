import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss', '../../shared/scss/global.scss'],
})
export class HomeComponent {
  constructor(public readonly router: Router) {}
}
