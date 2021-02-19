import { EntryAddComponent } from './entry-add/entry-add.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
import { EntryComponent } from './entry/entry.component';
import { Component } from '@angular/core';
import {Routes} from '@angular/router';
export const appRoutes: Routes = [
 {path: 'entry', component: EntryComponent},
 {path: 'entryDetail/:entryId', component: EntryDetailComponent},
 {path: 'entryadd', component: EntryAddComponent},
 { path: '**', redirectTo: 'entry', pathMatch: 'full'}
];
