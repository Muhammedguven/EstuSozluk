import { EntryService } from './../services/entry.service';
import { Component, OnInit } from '@angular/core';
import { Entry } from '../models/entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
  providers: [EntryService]
})
export class EntryComponent implements OnInit {

  constructor(private entryService: EntryService) {}
  entries: Entry[] | undefined;
  ngOnInit() {
    this.entryService.getEntries().subscribe(data => {
      this.entries = data;
    });
  }

}

