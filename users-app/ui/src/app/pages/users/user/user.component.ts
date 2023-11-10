import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { Profession } from 'src/app/models/profession.model';
import { Quality } from 'src/app/models/quality.model';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy{

  imgUrl = "https://xsgames.co/randomusers/avatar.php?g=pixel";

  user: User | undefined;
  userSub = new Subscription();
  dataSub = new Subscription();
  qualitiesList: Quality[] = [];
  professionsList: Profession[] = [];

  constructor(
    private userService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userSub = this.userService.getUser(id).subscribe(user => this.user = user);
    this.dataSub = this.activatedRoute.data.subscribe(({0: qualities, 1: professions}) => {
      this.qualitiesList = qualities;
      this.professionsList = professions;
    })
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
    this.dataSub.unsubscribe();
  }

  onFindQuality(index: string | undefined) {
    if (index) {
      return this.qualitiesList.find(el => el.id === index);
    }
    return undefined;  
  }

  onFindProfession(index: string | undefined) {
    if (index) {
      return this.professionsList.find(el => el.id === index)?.name;
    }
    return null;
  }

}
