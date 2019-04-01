import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form/search-form.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
import {HttpModule} from '@angular/http';
import { GitSearchService } from './git-search.service';
import {RepoService} from './repo.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    // UserProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [GitSearchService,RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
