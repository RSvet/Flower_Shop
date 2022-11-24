import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { }
  
  @ViewChild("contForm") contactForm : NgForm;

  ngOnInit(): void {
    
  }
  onSubmit(){
    this.contactForm.reset();
  }


 
}
