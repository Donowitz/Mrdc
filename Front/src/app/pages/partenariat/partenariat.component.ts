import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'partenariat',
  templateUrl: 'partenariat.component.html',
  styleUrls: ['./partenariat.component.scss'],
})
export class PartenariatComponent implements OnInit {
  partenariatBgImg: string;
  constructor() {}

  ngOnInit() {
    this.partenariatBgImg = './../../../assets/partenariat.jpg';
  }
}
