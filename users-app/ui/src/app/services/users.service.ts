import { User } from "src/app/models/user.model";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({providedIn: 'root'})
export class UsersService {

  private url = 'https://users-app-base-default-rtdb.europe-west1.firebasedatabase.app/users';

  constructor(
    private httpCliet: HttpClient,
  ) {}

  getUsers() {
    return this.httpCliet.get(`${this.url}.json`)
      .pipe(
        map(data => {
          const array: User[] = [];
          for (const item of Object.values(data)) {
            const user: User = {
              id: item.id,
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
      );
  }

  getUser(index: string | null) {
    return this.httpCliet.get<User>(`${this.url}\\${index}.json`);
  }
}