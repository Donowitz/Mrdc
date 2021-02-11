import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'medias',
  templateUrl: 'medias.component.html',
  styleUrls: ['./medias.component.scss'],
})
export class MediasComponent implements OnInit {
  listeActicles = [
    {
      magazine: 'Made in Marseille',
      titre: `Marseille Roller Derby : (presque) tous les coups sont permis !`,
      lien: 'https://madeinmarseille.net/32874-roller-derby-club/',
    },
    {
      magazine: 'Huffington Post',
      titre: `8 raisons pour lesquelles nous souhaitons rencontrer l'équipe égyptienne de Roller Derby`,
      liene:
        'https://www.huffingtonpost.fr/margaid-quioc/8-raisons-pour-lesquelles-nous-souhaitons-rencontrer-lequipe-eg_a_21874400/',
    },
    {
      magazine: 'La provence',
      titre: `Marseille : roller derby, dans l'antre des Bloody Skulls `,
      lien:
        'https://www.laprovence.com/article/sports/2039767/marseille-roller-derby-dans-lantre-des-bloody-skulls.html',
    },
  ];
  mediasBgImg: string;

  constructor() {}

  ngOnInit() {
    this.mediasBgImg = './../../../assets/media.jpg';
  }
}
