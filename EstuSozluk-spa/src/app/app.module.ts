import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EntryComponent } from './entry/entry.component';
import { HttpClientModule } from '@angular/common/http';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
import { EntryAddComponent } from './entry-add/entry-add.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
      NavComponent,
      EntryComponent,
      EntryDetailComponent,
      EntryAddComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
