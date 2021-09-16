import {
  Component,
  Input,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'page-layout',
  templateUrl: `./page-layout.component.html`,
  styleUrls: ['./page-layout.component.scss', '../../shared/scss/global.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageLayoutComponent {
  @Input() pageContent: TemplateRef<{ item: any }>;
  @Input() imgSrc: string;
  @Input() justifyContent: string;

  constructor() {}
}
