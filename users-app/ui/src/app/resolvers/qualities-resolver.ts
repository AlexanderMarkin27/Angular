import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { QualitiesService } from "../services/qualities.service";
import { Quality } from "../models/quality.model";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs";

export const qualitiesResolver: ResolveFn<Quality[]> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    const qualitiesService = inject(QualitiesService);

    return qualitiesService.getQualities();
  }