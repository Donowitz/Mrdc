import {
  TrainingDays,
  TrainingDto,
} from './../../../../../Back/src/shared/models/dto/trainingsDto';
import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { TeamService } from 'src/app/core/backend/services/team.service';
import { UserService } from 'src/app/core/backend/services/user.service';
import { TeamDto } from '../../../../../Back/src/shared/models/dto/teamsDto';
import { TrainingService } from 'src/app/core/backend/services/training.service';
import { FormService } from 'src/app/shared/services/form.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'nous-rejoindre',
  templateUrl: 'nous-rejoindre.component.html',
  styleUrls: ['nous-rejoindre.component.scss'],
})
export class NousRejoindreComponent implements OnInit, AfterViewInit {
  joinImg = './../../../assets/nous-rejoindre.jpg';
  article: HTMLElement;
  teamList: TeamDto[] = [];
  trainings: TrainingDto[];
  trainingDays = TrainingDays;
  trainingForm: FormGroup[];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerHeight < 600) {
      this.renderer.setStyle(this.article, 'height', '100%');
    } else {
      this.renderer.setStyle(this.article, 'height', 'auto');
    }
  }

  constructor(
    private renderer: Renderer2,
    public readonly userService: UserService,
    private readonly teamService: TeamService,
    private readonly trainingService: TrainingService,
    private readonly formService: FormService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.teamService.getAllTeams().subscribe((r) => (this.teamList = r));
    this.trainingService
      .getAllTrainings()
      .subscribe((r) => { this.trainings = r; console.log(r) });
  }

  ngAfterViewInit() {
    this.article = document.getElementById('articleContainer');
    if (window.outerHeight < 600) {
      this.renderer.setStyle(this.article, 'height', '100%');
    } else {
      this.renderer.setStyle(this.article, 'height', 'auto');
    }
  }

  updateTraining(trainingId: string, trainingInfo) {
    this.trainingService
      .updateTraining(trainingId, trainingInfo)
      .subscribe((r) => this.formService.saveEvent('Le créneau est édité'));
  }
}
