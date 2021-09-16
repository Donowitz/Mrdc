import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'partenariat',
  templateUrl: 'partenariat.component.html',
  styleUrls: ['../../shared/scss/global.scss'],
})
export class PartenariatComponent implements OnInit {
  justifyContent: string = 'center';

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 600) {
      this.justifyContent = 'flex-start';
    } else {
      this.justifyContent = 'center';
    }
  }

  constructor() {}

  ngOnInit() {
    if (window.outerWidth < 600) {
      this.justifyContent = 'flex-start';
    } else {
      this.justifyContent = 'center';
    }
  }
}
