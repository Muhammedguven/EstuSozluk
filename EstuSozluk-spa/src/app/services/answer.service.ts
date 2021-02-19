import { Injectable } from '@angular/core';
import { Answer } from '../models/answer';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  constructor(private httpClient: HttpClient) {}
  path = 'https://localhost:44367/api/';

  // tslint:disable-next-line: typedef
  addAnswer(answer: Answer) {
    this.httpClient.post(this.path + 'answers/add', answer).subscribe();
  }
}
