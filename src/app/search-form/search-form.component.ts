import { Observable} from 'rxjs/Rx';
import { RepoSearch} from '../repo-search';
import { Component, OnInit,Inject } from '@angular/core';
import { GitSearchService } from '../git-search.service';

import {RepoService} from '../repo.service';
import { UserSearch} from '../user-search';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  providers: [ GitSearchService, RepoService]
})
export class SearchFormComponent implements OnInit {
  userName = 'ya7skaa';
  repos:RepoSearch[];
  users:UserSearch[];

  loading = false;
  errorMessage;

  constructor(private repoSearch: RepoService, private userSearch: GitSearchService  ) {



  }


// public getRepos(event: any) {
//   this.loading = true;
//
//   let promise = new Promise((resolve , reject) => {
//    this.repoSearch.getRepos (this.userName).toPromise().then(response => {
//      this.repos = response; this.loading = false; // this will push all data to array [repo]
//       resolve();
//     },
//     error => {
//       this.errorMessage = 'An error was encountered';
//       this.loading = false;
//     }
//   );
//   });
//   return promise;
// }

public getRepos(){
  this.loading= true;
  this.errorMessage= '';

  this.repoSearch.getRepos(this.userName).subscribe((response)=>{this.repos=response;},(error)=>{this.errorMessage=error;this.loading=false;},()=>{this.loading=false;})
}

public getUsers(){
  this.loading=true;
  this.errorMessage='';
  this.userSearch.getUsers(this.userName).subscribe((response)=>{this.users=response;},(error)=>{this.errorMessage=error;this.loading=false;},()=>{this.loading=false;})
}
// public getUsers(event: any) {
//   this.loading = true;
//   // tslint:disable-next-line:prefer-const
//   let promise = new Promise((resolve , reject) => {
//    this.userSearch.getUsers(this.userName).toPromise().then(response => {
//      this.users = response; this.loading = false; // this will push all data to array [repo]
//       resolve();
//     },
//     error => {
//       this.errorMessage = 'An error was encountered';
//       this.loading = false;
//     }
//   );
//   });
//   return promise;
// }


  ngOnInit() {
  }

}
