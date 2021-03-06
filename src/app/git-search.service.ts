import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { UserSearch } from './user-search';
import {environment} from '../environments/environment';

@Injectable()

export class GitSearchService {

users:UserSearch;
public userName='ya7skaa';



  baseURL: string = 'https://api.github.com/';
  constructor(private http: HttpClient) {
  }

  getUsers(userName: string): Observable<UserSearch[]> {
    return this.http.get<UserSearch[]>(this.baseURL + 'users/' + userName+ '?access_token ='+environment.apikey );


}

}
