import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  path = 'https://localhost:44367/api/authentication/';

  getUserById(userId: number): Observable<User> {
    return this.httpClient.get<User>(
      this.path + 'detail/?id=' + userId
    );
  }
}
