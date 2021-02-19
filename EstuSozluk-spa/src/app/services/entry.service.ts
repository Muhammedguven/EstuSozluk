import { Answer } from './../models/answer';
import { Entry } from './../models/entry';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EntryService {
  constructor(private httpClient: HttpClient) {}
  path = 'https://localhost:44367/api/';

  getEntries(): Observable<Entry[]> {
    return this.httpClient.get<Entry[]>(this.path + 'entries');
  }
  getEntryById(entryId: number): Observable<Entry> {
    return this.httpClient.get<Entry>(
      this.path + 'entries/detail/?id=' + entryId
    );
  }
  getAnswersByEntry(entryId: number): Observable<Answer[]> {
    return this.httpClient.get<Answer[]>(
      this.path + 'answers/detail/?id=' + entryId
    );
  }

  addEntry(entry: Entry) {
    this.httpClient.post(this.path + 'entries/add', entry).subscribe();
  }
}
