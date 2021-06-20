import { Router } from '@angular/router';
import { MediaDto } from './../../../../../Back/src/shared/models/dto/mediasDto';
import { Component, OnInit } from '@angular/core';
import { MediasService } from 'src/app/core/backend/services/medias.service';

@Component({
  selector: 'medias',
  templateUrl: 'medias.component.html',
  styleUrls: ['./medias.component.scss'],
})
export class MediasComponent implements OnInit {
  articles: MediaDto[];
  // listeActicles = [
  //   {
  //     magazine: 'Made in Marseille',
  //     titre: `Marseille Roller Derby : (presque) tous les coups sont permis !`,
  //     lien: 'https://madeinmarseille.net/32874-roller-derby-club/',
  //   },
  //   {
  //     magazine: 'Huffington Post',
  //     titre: `8 raisons pour lesquelles nous souhaitons rencontrer l'équipe égyptienne de Roller Derby`,
  //     liene:
  //       'https://www.huffingtonpost.fr/margaid-quioc/8-raisons-pour-lesquelles-nous-souhaitons-rencontrer-lequipe-eg_a_21874400/',
  //   },
  //   {
  //     magazine: 'La provence',
  //     titre: `Marseille : roller derby, dans l'antre des Bloody Skulls `,
  //     lien:
  //       'https://www.laprovence.com/article/sports/2039767/marseille-roller-derby-dans-lantre-des-bloody-skulls.html',
  //   },
  // ];
  mediasBgImg: string;

  constructor(
    private readonly mediasService: MediasService,
    public readonly router: Router
  ) {}

  ngOnInit() {
    this.mediasBgImg = './../../../assets/media.jpg';
    this.mediasService.getAllMedias().subscribe((res) => {
      this.articles = res;
    });
  }
}
