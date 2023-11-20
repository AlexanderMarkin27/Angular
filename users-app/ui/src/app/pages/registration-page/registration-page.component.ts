import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Profession } from 'src/app/models/profession.model';
import { Quality } from 'src/app/models/quality.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit, OnDestroy{

  

  professionsList: Profession[] = [];
  qualitiesList: Quality[] = [];

  dataSub = new Subscription();

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.dataSub = this.activatedRoute.data.subscribe(({0: qualities, 1: professions}) => {
      this.qualitiesList = qualities;
      this.professionsList = professions;
    })
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }



}
