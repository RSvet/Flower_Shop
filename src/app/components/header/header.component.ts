import { Component, OnInit } from '@angular/core';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faCaretDown} from  '@fortawesome/free-solid-svg-icons'
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faCartShopping = faCartShopping;
  faUser = faUser;
  faCaretDown = faCaretDown;
  faCircleUser = faCircleUser;
  faBars = faBars;
  public isMenuCollapsed = true;
  constructor() {    
  }

  ngOnInit(): void {
  }

}