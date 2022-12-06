import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  display: string = 'none';
  constructor(private _authService: AuthService) { }
  @ViewChild("signupForm") signupForm : NgForm;
  ngOnInit(): void {
  }

  signup(email: string, pass: string){
    this._authService.signUp(email, pass);
  }

  sendVerificationEmail(){
    this._authService.sendVerificationEmail();
  
  }

  openModal(){
   this.display='block';
 }





}
