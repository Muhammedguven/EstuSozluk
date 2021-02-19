import { EntryService } from './../services/entry.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Entry } from '../models/entry';
@Component({
  selector: 'app-entry-add',
  templateUrl: './entry-add.component.html',
  styleUrls: ['./entry-add.component.scss'],
  providers: [EntryService],
})
export class EntryAddComponent implements OnInit {
  constructor(
    private entryService: EntryService,
    private formBuilder: FormBuilder
  ) {}
  entry!: Entry;
  entryAddForm!: FormGroup;

  ngOnInit() {
    this.createEntryForm();
  }
  createEntryForm() {
    this.entryAddForm = this.formBuilder.group({
      title: [' ', Validators.required],
      category: [' ', Validators.required],
      description: [' ', Validators.required],
    });
  }

  addEntry() {
    if (this.entryAddForm.valid) {
      this.entry = Object.assign({}, this.entryAddForm.value);
      this.entry.userId = 1;
      this.entryService.addEntry(this.entry);
    }

  }
}
