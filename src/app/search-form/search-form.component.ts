import { Observable} from 'rxjs/Rx';
import { RepoSearch} from '../repo-search';
import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import {environment} from '../../environments/environment';
import {RepoSearchService} from '../repo-search.service';
import { UserSearch} from '../user-search';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  providers: [ GitSearchService, RepoSearchService]
})
export class SearchFormComponent implements OnInit {
  userName = 'Yasmin Abdirahman';
  repos: repos[];
  users: user[];

  loading = false;
  errorMessage;

  constructor( private repoSearch: RepoService, private usersearch: GitSearchService) {
  }


public getRepos(event: any) {
  this.loading = true;
  // tslint:disable-next-line:prefer-const
  let promise = new Promise((resolve , reject) => {
   this.repoService.getRepos (this.userName).toPromise().then(response => {
     this.repos = response; this.loading = false; // this will push all data to array [repo]
      resolve();
    },
    error => {
      this.errorMessage = 'An error was encountered';
      this.loading = false;
    }
  );
  });
  return promise;
}
public getUsers(event: any) {
  this.loading = true;
  // tslint:disable-next-line:prefer-const
  let promise = new Promise((resolve , reject) => {
   this.GitSearchService.getUsers(this.userName).toPromise().then(response => {
     this.users = response; this.loading = false; // this will push all data to array [repo]
      resolve();
    },
    error => {
      this.errorMessage = 'An error was encountered';
      this.loading = false;
    }
  );
  });
  return promise;
}


  ngOnInit() {
  }

}
