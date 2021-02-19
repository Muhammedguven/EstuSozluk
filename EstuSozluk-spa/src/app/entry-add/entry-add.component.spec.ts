/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntryAddComponent } from './entry-add.component';

describe('EntryAddComponent', () => {
  let component: EntryAddComponent;
  let fixture: ComponentFixture<EntryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
