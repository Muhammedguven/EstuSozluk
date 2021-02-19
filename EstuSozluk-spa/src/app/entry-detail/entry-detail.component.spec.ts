/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntryDetailComponent } from './entry-detail.component';

describe('EntryDetailComponent', () => {
  let component: EntryDetailComponent;
  let fixture: ComponentFixture<EntryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
