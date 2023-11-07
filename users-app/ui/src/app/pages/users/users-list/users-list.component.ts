import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  userslist: User[] = [];

  constructor(
    private userService: UsersService
  ){}


  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.userslist = users);
  }

}
