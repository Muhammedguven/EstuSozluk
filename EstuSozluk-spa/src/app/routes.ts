import { RegisterComponent } from './register/register.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EntryAddComponent } from './entry-add/entry-add.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
import { EntryComponent } from './entry/entry.component';
import { Component } from '@angular/core';
import {Routes} from '@angular/router';
export const appRoutes: Routes = [
 {path: 'entry', component: EntryComponent},
 {path: 'entryDetail/:entryId', component: EntryDetailComponent},
 {path: 'entryadd', component: EntryAddComponent},
 {path: 'login-page', component: LoginPageComponent},
 {path: 'register', component: RegisterComponent},
 { path: '**', redirectTo: 'login-page', pathMatch: 'full'}
];
