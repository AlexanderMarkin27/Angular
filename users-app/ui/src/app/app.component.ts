import { Component, OnInit } from '@angular/core';
import { UsersService } from './pages/users/users.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // private userslist: User[] = [];

  // constructor(
  //   private userService: UsersService
  // ){}


  ngOnInit(): void {
    // this.userService.getUsers().subscribe(users => this.userslist = users);
  }

}
