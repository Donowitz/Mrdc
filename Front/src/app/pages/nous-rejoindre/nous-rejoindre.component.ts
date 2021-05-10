import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'nous-rejoindre',
  templateUrl: 'nous-rejoindre.component.html',
  styleUrls: ['nous-rejoindre.component.scss'],
})
export class NousRejoindreComponent implements OnInit, AfterViewInit {
  joinImg = './../../../assets/nous-rejoindre.jpg';
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
    //this.joinImg = './../../../assets/nous-rejoindre.jpg';
  }

  ngAfterViewInit() {
    this.article = document.getElementById('articleContainer');
    if (window.outerHeight < 600) {
      this.renderer.setStyle(this.article, 'height', '100%');
    } else {
      this.renderer.setStyle(this.article, 'height', 'auto');
    }
  }
}
