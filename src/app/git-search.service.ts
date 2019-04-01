import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { user } from './user';
import {environment} from '../environments/environment';

@Injectable()

export class ProfileRequestService {



  baseURL: string = 'https://api.github.com';
  constructor(private http: HttpClient) {
  }

  getUsers(userName: string): Observable<user[]> {
    return this.http.get<user[]>(this.baseURL + '/users/' + userName);

}

}
