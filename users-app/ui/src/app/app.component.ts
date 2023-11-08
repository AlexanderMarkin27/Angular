import { Component, OnInit } from '@angular/core';
import { ProfessionsService } from './services/professions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // private userslist: User[] = [];

  constructor(
    private professionsService: ProfessionsService 
  ){}


  ngOnInit(): void {
    // this.professionsService.getProfessions();
  }

}
