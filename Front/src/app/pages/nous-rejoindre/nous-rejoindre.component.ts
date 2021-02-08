import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nous-rejoindre',
  templateUrl: 'nous-rejoindre.component.html',
  styleUrls: ['nous-rejoindre.component.scss'],
})
export class NousRejoindreComponent implements OnInit {
  joinImg: string;

  constructor() {}

  ngOnInit() {
    this.joinImg = './../../../assets/nous-rejoindre.jpg';
    console.log(this.joinImg);
  }
}
