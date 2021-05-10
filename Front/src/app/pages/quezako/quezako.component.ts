import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quezako',
  templateUrl: 'quezako.component.html',
  styleUrls: [
    'quezako.component.scss',
    '../../app.component.scss',
    '../teams/teams.component.scss',
  ],
})
export class QuezakoComponent implements OnInit {
  menu = [
    {
      nom: 'Intro',
      ancre: 'intro',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
