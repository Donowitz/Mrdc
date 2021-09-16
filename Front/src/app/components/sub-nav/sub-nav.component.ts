import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'sub-nav',
  templateUrl: 'sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss'],
})
export class SubNavComponent implements OnInit {
  @Input() menu: any[];
  @Input() route: string;
  @Input() menuLength: number;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  onClick(e: Event, item) {
    let eventElId = (<HTMLInputElement>e.target).id;
    let eventCircleHtml;
    if (eventElId.includes('circle')) {
      eventCircleHtml = document.getElementById(eventElId);
    } else if (eventElId.includes('svg')) {
      eventCircleHtml = eventElId.includes('bloody')
        ? document.getElementById(
            eventElId.split('-')[0] + '-' + eventElId.split('-')[1] + '-circle'
          )
        : document.getElementById(eventElId.split('-')[0] + '-circle');
    } else {
      eventCircleHtml = document.getElementById(eventElId + '-circle');
    }

    let circles = document.getElementsByTagName('circle');
    for (let index = 0; index < this.menuLength; index++) {
      const circle = circles[index];
      this.renderer.setStyle(circle, 'opacity', '0.3');
    }

    this.renderer.setStyle(eventCircleHtml, 'opacity', '1');
  }
}
