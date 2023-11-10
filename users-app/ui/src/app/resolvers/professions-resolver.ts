import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Profession } from "../models/profession.model";
import { ProfessionsService } from "../services/professions.service";
import { inject } from "@angular/core";

export const professionsResolver: ResolveFn<Profession[]> = 
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    const professionsService = inject(ProfessionsService);

    return professionsService.getProfessions();
  }