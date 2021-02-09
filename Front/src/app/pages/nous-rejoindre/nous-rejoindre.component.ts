import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'nous-rejoindre',
  templateUrl: 'nous-rejoindre.component.html',
  styleUrls: ['nous-rejoindre.component.scss'],
})
export class NousRejoindreComponent implements OnInit {
  joinImg: string;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.joinImg = './../../../assets/nous-rejoindre.jpg';
  }
}
