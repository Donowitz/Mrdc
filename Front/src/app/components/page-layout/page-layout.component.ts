import {
  Component,
  Input,
  Renderer2,
  TemplateRef,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'page-layout',
  templateUrl: `./page-layout.component.html`,
  styleUrls: ['./page-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageLayoutComponent implements OnInit, AfterViewInit {
  @Input() pageContent: TemplateRef<{ item: any }>;
  @Input() imgSrc: string;
  article: HTMLElement;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerHeight < 600) {
      this.renderer.setStyle(this.article, 'height', '100%');
    } else {
      this.renderer.setStyle(this.article, 'height', 'auto');
    }
  }

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    let imgBox = document.getElementById('image');
    this.renderer.setStyle(imgBox, 'background-image', `url(${this.imgSrc})`);
  }

  ngAfterViewInit() {
    this.article = document.getElementById('container');

    if (window.outerHeight < 600) {
      this.renderer.setStyle(this.article, 'height', '100%');
    } else {
      this.renderer.setStyle(this.article, 'height', 'auto');
    }
  }
}
