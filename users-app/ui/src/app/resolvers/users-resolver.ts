import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { User } from "../models/user.model";
import { UsersService } from "../services/users.service";
import { inject } from "@angular/core";

export const usersResolver: ResolveFn<User[]> = 
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    const usersService = inject(UsersService);

    return usersService.getUsers();
  }