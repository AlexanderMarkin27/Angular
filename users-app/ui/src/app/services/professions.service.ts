import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Profession } from "../models/profession.model";
import { map } from "rxjs";

@Injectable({providedIn: 'root'})
export class ProfessionsService {
  private url = 'https://users-app-base-default-rtdb.europe-west1.firebasedatabase.app/profession.json'

  constructor(
    private http: HttpClient
  ) {}


  getProfessions() {
    return this.http.get<Profession[]>(this.url)
    .pipe(map(data => {
      const array = [];
      for (const prof of Object.values(data)) {
        const profession: Profession = {
          id: prof.id,
          name: prof.name
        }
        array.push(profession);
      }
      return array;
    }))
  }

}