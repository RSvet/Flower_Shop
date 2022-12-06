import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { stringLength } from '@firebase/util';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService ) { }
  @ViewChild("loginForm") loginForm : NgForm;
  ngOnInit(): void {
    
  }

  login(email: string, password: string){
    this._authService.signIn(email, password);
  }

  

  

}
