import {
  Component,
  Input,
  Renderer2,
  TemplateRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'page-layout',
  templateUrl: `./page-layout.component.html`,
  styleUrls: ['./page-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageLayoutComponent implements OnInit {
  @Input() pageContent: TemplateRef<{ item: any }>;
  @Input() imgSrc: string;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    let imgBox = document.getElementById('image');
    this.renderer.setStyle(imgBox, 'background-image', `url(${this.imgSrc})`);
  }
}
