import { ActivatedRoute } from '@angular/router';
import { EntryService } from '../services/entry.service';
import { Component, OnInit } from '@angular/core';
import { Entry } from '../models/entry';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css'],
  providers: [EntryService]
})
export class FacultyComponent implements OnInit {

  constructor(private entryService: EntryService, private activatedRoute: ActivatedRoute) {


  }
  entries: Entry[] | undefined;
  categoryNow: string ="";
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if(params['category'] == "muhendislik"){this.categoryNow="mühendislik"};
      if(params['category'] == "havacilik"){this.categoryNow="havacılık"};
      if(params['category'] == "besyo"){this.categoryNow="besyo"};
      if(params['category'] == "hazirlik"){this.categoryNow="hazırlık"};
      this.entryService.getEntriesByCategory(this.categoryNow).subscribe(data => {
        this.entries = data;
      });
    });
  }
  getEntriesByCategory(category: string){

  }
}

