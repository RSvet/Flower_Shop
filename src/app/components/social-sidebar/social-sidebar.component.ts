import { Component, OnInit } from '@angular/core';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faPinterestP} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-sidebar',
  templateUrl: './social-sidebar.component.html',
  styleUrls: ['./social-sidebar.component.css']
})
export class SocialSidebarComponent implements OnInit {
  faFacebookF = faFacebookF;
  faTwitter=faTwitter;
  faPinterestP =faPinterestP;
  faYoutube=faYoutube;
  faInstagram=faInstagram;
  constructor() { }

  ngOnInit(): void {
  }

}
