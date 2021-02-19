import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';
import { LoginUser } from './../models/loginUser';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RegisterUser } from '../models/registerUser';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private alertifyService: AlertifyService
  ) {}
  path = 'https://localhost:44367/api/authentication/';
  TOKEN_KEY = 'token';
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelperService = new JwtHelperService();
  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient
      .post(this.path + 'login', loginUser, { headers: headers })
      .subscribe((data) => {
        this.saveToken(data);
        this.userToken = data;
        this.decodedToken = this.jwtHelper.decodeToken(data.toString());
        this.alertifyService.success('Sisteme giriş yapıldı');
        this.router.navigateByUrl('/entry');
        setTimeout(function(){ window.location.reload(); }, 500);
      });
  }
  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient
      .post(this.path + 'register', registerUser, { headers: headers })
      .subscribe((data) => {
        this.alertifyService.success('Sisteme kayıt olundu.');
      });
  }
  saveToken(token: any) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.alertifyService.error('Sistemden çıkış yapıldı');
    this.router.navigateByUrl('/login-page');
    setTimeout(function(){ window.location.reload(); }, 1500);


  }

  loggedIn() {
    return this.jwtHelper.isTokenExpired(this.TOKEN_KEY);
  }

  getCurrentUserId() {
    return this.jwtHelper.decodeToken(
      localStorage.getItem(this.TOKEN_KEY) || '{}'
    ).nameid;
  }
}
