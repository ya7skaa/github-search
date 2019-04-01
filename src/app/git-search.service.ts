import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { UserSearch } from './user-search';
import {environment} from '../environments/environment';

@Injectable()

export class GitSearchService {



  baseURL: string = 'https://api.github.com';
  constructor(private http: HttpClientModule) {
  }

  getUsers(userName: string): Observable<UserSearch[]> {
    return this.http.get<UserSearch[]>(this.baseURL + '/users/' + userName);

}

}
