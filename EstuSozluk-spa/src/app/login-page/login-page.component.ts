import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private authService: AuthService) {}

  loginUser: any = {};

  ngOnInit() {
  }
  login() {
    this.authService.login(this.loginUser);
  }

  logOut(){
    this.authService.logOut();
  }

  get isAuthenticated(){
     return this.authService.loggedIn();
  }
}
