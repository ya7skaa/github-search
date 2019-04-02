import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { RepoSearch } from './repo-search';
import {environment} from '../environments/environment';
@Injectable()



export class RepoService {
  repos:RepoSearch
  public userName = 'ya7skaa';
  baseURL: string = 'https://api.github.com/';
  constructor(private http: HttpClient) {
  }

  getRepos(userName: string): Observable<RepoSearch[]> {
       return this.http.get<RepoSearch[]>(this.baseURL + 'users/' + userName + '/repos?access_token ='+environment.apikey);
  }
}
