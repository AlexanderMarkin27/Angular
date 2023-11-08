import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Quality } from "../models/quality.model";
import { map } from "rxjs";

@Injectable({providedIn: 'root'})
export class QualitiesService {
  private url = 'https://users-app-base-default-rtdb.europe-west1.firebasedatabase.app/qualities.json'

  constructor(
    private http: HttpClient,
  ) {}

  getQualities() {
    return this.http.get<Quality>(this.url)
    .pipe(map(data => {
      const array = [];
      for (const quality of Object.values(data)) {
        const qual: Quality = {
          id: quality.id,
          name: quality.name,
          color: quality.color
        }
        array.push(qual);
      }
      return array;
    }))
  }
}