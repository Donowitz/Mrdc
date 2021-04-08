import { AnimationService } from './../../shared/services/animation.service';
import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { TeamsService } from 'src/app/core/backend/services/equipes.service';
import { Observable } from 'rxjs';
import { TeamsDto } from '../../../../../Back/src/shared/models/dto/teamsDto';
import { tap } from 'rxjs/operators';

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
  teams$: Observable<TeamsDto[]>;

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

    this.teams$ = this.teamsService
      .getAllTeams()
      .pipe(tap((res) => console.log(res)));
  }

  ngAfterViewInit() {
    this.lastSection = document.getElementById('rascasses');
  }
}
