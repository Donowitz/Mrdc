import { AnimationService } from './../../shared/services/animation.service';
import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { TeamsService } from 'src/app/core/backend/services/equipes.service';

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
  teams;

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

  constructor(
    private animationService: AnimationService,
    private teamsService: TeamsService
  ) {}

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

    this.teamsService.getAllTeams().subscribe((res) => {
      this.teams = res;
      console.log(res);
    });
    console.log(typeof this.teams);
  }

  ngAfterViewInit() {
    this.lastSection = document.getElementById('rascasses');
  }
}
