import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Profession } from 'src/app/models/profession.model';
import { Quality } from 'src/app/models/quality.model';
import { User } from 'src/app/models/user.model';
import { ProfessionsService } from 'src/app/services/professions.service';
import { QualitiesService } from 'src/app/services/qualities.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy{

  usersList: User[] = [];
  professionsList: Profession[] = [];
  qualitiesList: Quality[] = [];

  usersSub = new Subscription;
  dataSub = new Subscription;

  constructor(
    private activatedRoute: ActivatedRoute
  ){}


  ngOnInit(): void {
    this.dataSub = this.activatedRoute.data.subscribe(({0: qualities, 1: professions, 2: users}) => {
      this.qualitiesList = qualities;
      this.professionsList = professions;
      this.usersList = users;
    });
  }

  ngOnDestroy(): void {
    this.usersSub.unsubscribe();
  }

  onFindProfession(index: string) { 
    return this.professionsList.find(prof => prof.id === index)?.name;
  }

  onFindQuality(index: string) {
    return this.qualitiesList.find(qual => qual.id === index);
  }

}
