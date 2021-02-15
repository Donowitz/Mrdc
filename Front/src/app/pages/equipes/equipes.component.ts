import { AnimationService } from './../../shared/services/animation.service';
import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'equipes',
  templateUrl: 'equipes.component.html',
  styleUrls: ['./equipes.component.scss'],
})
export class EquipesComponent implements OnInit, AfterViewInit {
  equipeMenu: any[];
  equipeRoute: string;
  lastSection: HTMLElement;
  showScroll = true;

  @HostListener('window:scroll') onWindowScroll(): void {
    console.log(window.scrollY);
    if (this.animationService.isInViewport(this.lastSection)) {
      console.log(false);
      this.showScroll = false;
    } else {
      console.log(true);
      this.showScroll = true;
    }
  }

  constructor(private animationService: AnimationService) {}

  ngOnInit() {
    this.equipeRoute = '/nos-equipes';
    this.equipeMenu = [
      {
        ancre: 'bloody-skulls',
        nom: 'Bloody Skulls',
      },
      {
        ancre: 'mars-invaders',
        nom: 'Mars Invaders',
      },
      {
        ancre: 'chapacans',
        nom: 'Chapacans',
      },
      {
        ancre: 'rascasses',
        nom: 'Rascasses',
      },
    ];
  }

  ngAfterViewInit() {
    this.lastSection = document.getElementById('rascasses');
  }
}
