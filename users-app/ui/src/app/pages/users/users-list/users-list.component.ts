import { Component, OnDestroy, OnInit } from '@angular/core';
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
  professionsSub = new Subscription;
  qualitiesSub = new Subscription;

  constructor(
    private userService: UsersService,
    private professionsService: ProfessionsService,
    private qualitiesService: QualitiesService
  ){}


  ngOnInit(): void {
    this.usersSub = this.userService.getUsers().subscribe(users => this.usersList = users);
    this.professionsSub = this.professionsService.getProfessions().subscribe(professions => this.professionsList = professions);
    this.qualitiesSub = this.qualitiesService.getQualities().subscribe(qualities => this.qualitiesList = qualities)
  }

  ngOnDestroy(): void {
    this.usersSub.unsubscribe();
    this.professionsSub.unsubscribe();
  }

  onFindProfession(index: string) { 
    return this.professionsList.find(prof => prof.id === index)?.name;
  }

  onFindQuality(index: string) {
    return this.qualitiesList.find(qual => qual.id === index);
  }



}
