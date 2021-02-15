import { Router } from '@angular/router';
import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'sub-nav',
  templateUrl: 'sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss'],
})
export class SubNavComponent implements OnInit {
  @Input() menu: any[];
  @Input() route: string;
  @Input() elementNumber: number;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  onClick(e: Event) {
    let eventElId = (<HTMLInputElement>e.target).id;
    let eventElHtml = document.getElementById(eventElId);

    let circles = document.getElementsByTagName('circle');
    for (let index = 0; index < this.elementNumber; index++) {
      const circle = circles[index];
      this.renderer.setStyle(circle, 'opacity', '0.3');
    }

    this.renderer.setStyle(eventElHtml, 'opacity', '1');
  }
}
