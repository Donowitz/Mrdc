import { TeamsService } from './../../../core/backend/services/teams.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'team-dialog',
  templateUrl: 'team-dialog.component.html',
  styleUrls: ['./team-dialog.component.scss', '../../../app.component.scss'],
})
export class TeamDialogComponent implements OnInit {
  @Input() teamId: string;
  //@Output() isTeamFormValid: EventEmitter<any> = new EventEmitter();
  teamForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly teamsService: TeamsService,
    public dialogRef: NbDialogRef<any>
  ) {}

  ngOnInit(): void {
    this.teamForm = this.fb.group({
      teamName: ['', [Validators.required, Validators.minLength(3)]],
      teamStory: '',
      flatTrackUrl: [
        '',
        [
          Validators.pattern(
            '(http?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
      order: ['', [Validators.required]],
      isActiveTeam: true,
    });

    if (this.teamId) {
      this.setForm(this.teamId);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveTeam(): void {
    this.teamsService.createTeam(this.teamForm.value).subscribe(() => {
      this.dialogRef.close('Nouvelle équipe crée.');
    });
  }

  updateTeam() {
    this.teamsService
      .updateTeam(this.teamId, this.teamForm.value)
      .subscribe(() => {
        this.dialogRef.close('Les modifications sont bien enregistrées.');
      });
  }

  deleteTeam() {
    this.teamsService.deleteTeam(this.teamId).subscribe(() => {
      this.dialogRef.close(
        `L'équipe ${this.teamForm.value.teamName} à été supprimée.`
      );
    });
  }

  private setForm(teamId: string): void {
    this.teamsService.getOneTeam(teamId).subscribe((team) => {
      this.teamForm.controls['teamName'].setValue(team.teamName);
      this.teamForm.controls['teamStory'].setValue(team.teamStory);
      this.teamForm.controls['flatTrackUrl'].setValue(team.flatTrackUrl);
      this.teamForm.controls['order'].setValue(team.order);
      this.teamForm.controls['isActiveTeam'].setValue(team.isActiveTeam);
    });
  }
}
