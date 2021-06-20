import { Component, Input, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from 'src/app/core/backend/services/auth.service';

@Component({
  selector: 'naviguation',
  templateUrl: 'naviguation.component.html',
  styleUrls: [
    './naviguation.component.scss',
    '../../app.component.scss',
    './hamburger-icon.component.scss',
  ],
})
export class NaviguationComponent implements OnInit {
  @Input() menuColor: string;
  toggleMenu: Boolean = false;
  routeArray = [
    { name: 'Quezako le roller derby', route: 'quezako' },
    { name: 'Le club', route: 'le-club' },
    { name: 'Nos équipes', route: 'nos-equipes' },
    { name: 'Nous rejoindre', route: 'nous-rejoindre' },
    { name: 'Partenariat', route: 'partenariat' },
    // { name: 'Blog', route: 'blog' },
    { name: 'Medias', route: 'medias' },
    { name: 'Contact', route: 'contact' },
  ];
  indexRouteSelected: number;
  i = 0;

  admin = true;

  constructor(
    public readonly router: Router,
    public readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.indexRouteSelected = this.routeArray.findIndex(
          (v) => v.route === event.url.split('/')[1]
        );
      }
    });
  }
}
