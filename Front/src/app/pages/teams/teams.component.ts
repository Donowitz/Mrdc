import { TeamsService } from 'src/app/core/backend/services/teams.service';
import { AnimationService } from '../../shared/services/animation.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamDto } from '../../../../../Back/src/shared/models/dto/teamsDto';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'teams',
  templateUrl: 'teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  equipeMenu: any[] = [];
  showScroll = true;
  lastAncre: string;
  teams$: Observable<TeamDto[]>;

  constructor(
    private animationService: AnimationService,
    private teamsService: TeamsService
  ) {}

  ngOnInit() {
    this.teams$ = this.teamsService.getAllTeams().pipe(
      tap((res) => {
        res.forEach((element) => {
          let ancre = element.teamName.replace(' ', '-').toLowerCase();
          this.equipeMenu.push({ nom: element.teamName, ancre: ancre });
          if (this.equipeMenu.length === res.length) {
            this.lastAncre = this.equipeMenu[res.length - 1].ancre;
          }
        });
      })
    );
  }
}
