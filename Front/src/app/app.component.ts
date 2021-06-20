import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  socialsColor: string;
  menuColor: string;
  facebook = faFacebookF;
  instagram = faInstagram;
  twitter = faTwitter;

  admin: boolean = true;

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (
        val &&
        val != undefined &&
        val['url'] != undefined &&
        val['url'].length > 0
      ) {
        switch (val['url']) {
          case '/nous-rejoindre':
          case '/partenariat':
          case '/medias':
          case '/contact':
            this.socialsColor = '#fff';
            break;
          default:
            this.socialsColor = '#373737';
        }

        if (val['url'] === '/') {
          this.menuColor = '#fff';
        } else {
          this.menuColor = '#373737';
        }
      }
    });
  }
}
