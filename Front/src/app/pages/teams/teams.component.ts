import { TeamDto } from './../../../../../Back/src/shared/models/dto/teamsDto';
import { TeamDialogComponent } from './team-dialog/team-dialog.component';
import { TeamService } from 'src/app/core/backend/services/team.service';
import { AnimationService } from '../../shared/services/animation.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { FormService } from 'src/app/shared/services/form.service';
import { UserService } from 'src/app/core/backend/services/user.service';

@Component({
  selector: 'teams',
  templateUrl: 'teams.component.html',
  styleUrls: ['./teams.component.scss', '../../shared/scss/global.scss'],
})
export class TeamsComponent implements OnInit {
  equipeMenu: any[] = [];
  showScroll = true;
  lastAncre: string;
  teams: TeamDto[];
  formResult: TeamDto;

  constructor(
    private readonly animationService: AnimationService,
    private readonly teamService: TeamService,
    private readonly dialogService: NbDialogService,
    private readonly formService: FormService,
    public readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.getAllTeams();
  }

  openTeamPopup(teamId?: string): void {
    this.dialogService
      .open(TeamDialogComponent, {
        context: { teamId: teamId ? teamId : '' },
      })
      .onClose.subscribe((data) => {
        if (data) {
          this.formService.saveEvent(data);
          this.getAllTeams();
        }
      });
  }

  private getAllTeams(): void {
    this.teamService.getAllTeams().subscribe((res) => {
      this.equipeMenu = [];
      this.teams = res.filter((team) => {
        // Set ancres
        let ancre = team.teamName.replace(' ', '-').toLowerCase();
        this.equipeMenu.push({ nom: team.teamName, ancre: ancre });
        if (this.equipeMenu.length === res.length) {
          this.lastAncre = this.equipeMenu[res.length - 1].ancre;
        }
        // map result depending on logged or not
        if (this.userService.connectedUser) {
          return team.teamName != 'Newbee';
        } else {
          return team.isActiveTeam === true;
        }
      });
    });
  }
}
