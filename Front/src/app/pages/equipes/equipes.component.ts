import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'equipes',
  templateUrl: 'equipes.component.html',
  styleUrls: ['./equipes.component.scss'],
})
export class EquipesComponent implements OnInit {
  equipeMenu: any[];
  equipeRoute: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.equipeRoute = '/nos-equipes';
    this.equipeMenu = [
      {
        ancre: 'bloody-skulls',
        nom: 'Bloody Skulls',
      },
      {
        ancre: 'mars-invaders',
        nom: 'Mars Invaders',
      },
      {
        ancre: 'chapacans',
        nom: 'Chapacans',
      },
      {
        ancre: 'rascasses',
        nom: 'Rascasses',
      },
    ];
  }
}
