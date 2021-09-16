import { TeamService } from '../../../core/backend/services/team.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'team-dialog',
  templateUrl: 'team-dialog.component.html',
  styleUrls: [
    './team-dialog.component.scss',
    '../../../shared/scss/global.scss',
  ],
})
export class TeamDialogComponent implements OnInit {
  @Input() teamId: string;
  teamForm: FormGroup;
  imgToUpload: any;
  logoToUpload: any;

  constructor(
    private readonly fb: FormBuilder,
    private readonly teamService: TeamService,
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

  closeDialog(): void {
    this.dialogRef.close();
  }

  uploadFile(fileList: Array<any>, type?: string): void {
    if (fileList.length > 0) {
      if (type) this.logoToUpload = fileList[0];
      else this.imgToUpload = fileList[0];
    }
  }

  saveTeam(): void {
    this.teamService.createTeam(this.teamForm.value).subscribe((newTeam) => {
      if (this.logoToUpload)
        this.teamService
          .uploadImage(this.logoToUpload, newTeam.id, 'logo')
          .subscribe();
      if (this.imgToUpload)
        this.teamService.uploadImage(this.imgToUpload, newTeam.id).subscribe();
      this.dialogRef.close('Nouvelle équipe crée.');
    });
  }

  updateTeam(): void {
    this.teamService
      .updateTeam(this.teamId, this.teamForm.value)
      .subscribe(() => {
        this.dialogRef.close('Les modifications sont bien enregistrées.');
      });

    if (this.logoToUpload)
      this.teamService
        .uploadImage(this.logoToUpload, this.teamId, 'logo')
        .subscribe();
    if (this.imgToUpload)
      this.teamService.uploadImage(this.imgToUpload, this.teamId).subscribe();
  }

  deleteTeam(): void {
    this.teamService.deleteTeam(this.teamId).subscribe(() => {
      this.dialogRef.close(
        `L'équipe ${this.teamForm.value.teamName} à été supprimée.`
      );
    });
  }

  private setForm(teamId: string): void {
    this.teamService.getOneTeam(teamId).subscribe((team) => {
      this.teamForm.controls['teamName'].setValue(team.teamName);
      this.teamForm.controls['teamStory'].setValue(team.teamStory);
      this.teamForm.controls['flatTrackUrl'].setValue(team.flatTrackUrl);
      this.teamForm.controls['order'].setValue(team.order);
      this.teamForm.controls['isActiveTeam'].setValue(team.isActiveTeam);
    });
  }
}
