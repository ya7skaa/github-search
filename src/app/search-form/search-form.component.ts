import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import{GitSearchService} from '../git-search.servive';
import 'rxjs/add/operator/map';
import {UserSearch} from '../user-search.ts'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Input() userSearch:UserSearch;
  @Output() userUpdated: EventEmitter<UserSearch> = new EventEmitter<UserSearch>();

  constructor(private _gitsearchService:gitSearchService) { }

  ngOnInit() {
    if(this.UserSearch){
      this.userSearch.user=false;
      this.getUserInformation();
    }
  }
  searchUser() {
         if (this.githubUser.userName && this.githubUser.userName.length > 0) {
             this._githubService.updateUser(this.githubUser.userName);
             this.getUserInformation();
         } else {
             this.githubUser.user = false;
         }
     }

     getUserInformation() {
         if (this.githubUser.userName && this.githubUser.userName.length > 0) {

             this._githubService.getUser().subscribe(user => {
                 this.githubUser.user = user;
                 this.userUpdated.emit(this.githubUser);
             },
                 (err) => {
                     console.log('err:' + err);
                     this.githubUser.user = false;
                 },
                 () => console.log('Done')
             );



             this._githubService.getRepos().subscribe(repos => {

                 this.githubUser.repos = repos;
                 this.userUpdated.emit(this.githubUser);
             },
                 (err) => {
                     console.log('err:' + err);
                     this.githubUser.user = false;
                 },
                 () => console.log('Done')
             );

         }
     }
 }
