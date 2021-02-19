import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [UserService],
})
export class NavComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private userService: UserService
  ) {}

  loginUser: any;
  user!: User;
  ngOnInit() {
      this.getUserById(this.authService.getCurrentUserId());
  }
  getUserById(userId: number) {
    this.userService.getUserById(userId).subscribe((data) => {
      this.user = data;
    });
  }
  logOut() {
    this.authService.logOut();
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
  }
  get name() {
    return this.authService.getCurrentUserId();
  }
}
