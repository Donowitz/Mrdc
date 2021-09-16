import { Router } from '@angular/router';
import { MediaDto } from './../../../../../Back/src/shared/models/dto/mediasDto';
import { Component, HostListener, OnInit } from '@angular/core';
import { MediaService } from 'src/app/core/backend/services/media.service';
import { UserService } from 'src/app/core/backend/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'medias',
  templateUrl: 'medias.component.html',
  styleUrls: ['./medias.component.scss', '../../shared/scss/global.scss'],
})
export class MediasComponent implements OnInit {
  articles: MediaDto[];
  mediaForm: FormGroup;
  toggleMediaForm: boolean = false;
  justifyContent: string = 'center';

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 600) {
      this.justifyContent = 'flex-start';
    } else {
      this.justifyContent = 'center';
    }
  }

  constructor(
    private readonly mediaService: MediaService,
    public readonly router: Router,
    public readonly userService: UserService,
    private readonly fb: FormBuilder,
    private readonly formService: FormService
  ) {}

  ngOnInit() {
    if (window.outerWidth < 600) {
      this.justifyContent = 'flex-start';
    } else {
      this.justifyContent = 'center';
    }

    this.mediaService.getAllMedias().subscribe((res) => {
      this.articles = res;
    });

    this.mediaForm = this.fb.group({
      magazine: ['', [Validators.required]],
      articleTitle: ['', [Validators.required]],
      url: [
        '',
        [
          Validators.pattern(
            '(http?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
      date: ['', [Validators.required]],
    });
  }

  saveMedia() {
    this.mediaService.addMedia(this.mediaForm.value).subscribe((r) => {
      this.formService.saveEvent(`L'article à bien été ajouté`);
      this.toggleMediaForm = false;
      this.mediaService.getAllMedias().subscribe((res) => {
        this.articles = res;
      });
    });
  }
}
