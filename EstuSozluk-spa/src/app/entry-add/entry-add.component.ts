import { AuthService } from "../services/auth.service";
import { AlertifyService } from './../services/alertify.service';
import { EntryService } from './../services/entry.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Entry } from '../models/entry';
import { Router } from '@angular/router';
@Component({
  selector: 'app-entry-add',
  templateUrl: './entry-add.component.html',
  styleUrls: ['./entry-add.component.scss'],
  providers: [EntryService],
})
export class EntryAddComponent implements OnInit {
  constructor(
    private entryService: EntryService,
    private formBuilder: FormBuilder,
    private alertifyService:AlertifyService,
    private router:Router,
    private authService: AuthService
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
      this.entry.userId = this.authService.getCurrentUserId().toString();
      this.entryService.addEntry(this.entry);
      this.alertifyService.success("Entry girişi yapıldı!");
      this.router.navigateByUrl('entry');

    }
    else{
      this.alertifyService.warning("Bir hata oluştu!");
    }

  }
}
