import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
    localStorage.setItem('lastname', 'Smith');
    
   }

  ngOnInit() {
   
  }
  logout()
  {
     let abc:string = "log";
  }
  
}