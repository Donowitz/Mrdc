import { TrainingDto } from './../../../../../Back/src/shared/models/dto/trainingsDto';
import { Component, HostListener, OnInit } from '@angular/core';
import { TeamService } from 'src/app/core/backend/services/team.service';
import { UserService } from 'src/app/core/backend/services/user.service';
import { TeamDto } from '../../../../../Back/src/shared/models/dto/teamsDto';
import { TrainingService } from 'src/app/core/backend/services/training.service';
import { FormService } from 'src/app/shared/services/form.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'nous-rejoindre',
  templateUrl: 'nous-rejoindre.component.html',
  styleUrls: ['nous-rejoindre.component.scss', '../../shared/scss/global.scss'],
})
export class NousRejoindreComponent implements OnInit {
  trainings$: Observable<TrainingDto[]>;
  teamList: TeamDto[] = [];
  trainingForm: FormGroup[];
  teamUpdate: boolean = false;
  justifyContent: string = 'flex-end';

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 600) {
      this.justifyContent = 'flex-start';
    } else {
      this.justifyContent = 'flex-end';
    }
  }

  constructor(
    public readonly userService: UserService,
    private readonly teamService: TeamService,
    private readonly trainingService: TrainingService,
    private readonly formService: FormService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    if (window.outerWidth < 600) {
      this.justifyContent = 'flex-start';
    } else {
      this.justifyContent = 'flex-end';
    }

    this.teamService.getAllTeams().subscribe(
      (teams) =>
        (this.teamList = teams.filter((team) => {
          return team.teamName != 'Rascasses';
        }))
    );
    this.trainings$ = this.trainingService.getAllTrainings();
  }

  getTeamName(id): string {
    return this.teamList.find((x) => x.id === id).teamName;
  }

  updateTraining(trainingId: string, trainingInfo) {
    let updatedTraining = { ...trainingInfo };
    if (!this.teamUpdate) {
      delete updatedTraining.teams;
    }
    this.trainingService
      .updateTraining(trainingId, updatedTraining)
      .subscribe((r) => {
        this.formService.saveEvent('Le créneau est édité');
        this.teamUpdate = false;
      });
  }
}
