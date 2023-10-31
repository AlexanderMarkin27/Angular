import { User } from "src/app/models/user.model";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({providedIn: 'root'})
export class UsersService {

  private users: User[] = [];

  constructor(
    private httpCliet: HttpClient,
  ) {}

  getUsers() {
    this.httpCliet.get('/assets/users.json')
      .pipe(
        map(data => {
          const array: User[] = [];
          for (const item of Object.values(data)) {
            const user: User = {
              id: item._id,
              name: item.name,
              email: item.email,
              password: item.password,
              profession: item.profession,
              qualities: item.qualities,
              completedMeetings: item.completedMeetings,
              rate: item.rate,
            }
            array.push(user);
          }
          return array;
        })
      )
      .subscribe( response => this.users = response);
  }
}