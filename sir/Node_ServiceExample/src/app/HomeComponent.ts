import { Component } from '@angular/core';

import { UserService } from './UserService';

@Component({
  selector: 'home-page',
  templateUrl:"UI/loops_one.html",
  providers:[UserService]
})
export class HomeComponent {
  profile = {};
  mongo = {};
  constructor(private userService: UserService) {
    this.userService.getUser().subscribe(data => this.profile = data);
    this.userService.getMongoData().subscribe(response=>this.mongo=response);
}

}