import { EntryService } from './../services/entry.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entry } from '../models/entry';
import { Answer } from '../models/answer';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AnswerService } from '../services/answer.service';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.scss'],
  providers: [EntryService,AnswerService]
})
export class EntryDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private entryService: EntryService,
    private answerService: AnswerService,
    private formBuilder: FormBuilder,
    private alertifyService:AlertifyService,
    private authService: AuthService
  ) {}
  entry!: Entry;
  answer!: Answer;
  answerAddForm!: FormGroup;
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getEntryById(params['entryId']);
      this.getAnswersByEntry(params['entryId']);
    });
    this.createAnswerForm();
  }

  getEntryById(entryId: number) {
    this.entryService.getEntryById(entryId).subscribe((data) => {
      this.entry = data;
    });
  }
  getAnswersByEntry(entryId: number){
    this.entryService.getAnswersByEntry(entryId).subscribe((data)=>{
      this.entry.answers = data;
    });
  }

  createAnswerForm() {
    this.answerAddForm = this.formBuilder.group({
      description: [' ', Validators.required],
    });
  }

  addAnswer() {
    if (this.answerAddForm.valid) {
      this.answer = Object.assign({}, this.answerAddForm.value);
      this.answer.userId = this.authService.getCurrentUserId().toString();
      this.answer.entryId = this.entry.id;
      this.answerService.addAnswer(this.answer);
      this.alertifyService.success("Cevap başarıyla gönderildi!");
      this.answerAddForm.reset();

    }
    else{
      this.alertifyService.warning("Bir hata oluştu!");
    }

  }
}
