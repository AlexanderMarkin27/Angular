import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { UsersListComponent } from "./pages/users/users-list/users-list.component";
import { UserComponent } from "./pages/users/user/user.component";
import { qualitiesResolver } from "./resolvers/qualities-resolver";
import { professionsResolver } from "./resolvers/professions-resolver";
import { usersResolver } from "./resolvers/users-resolver";
import { RegistrationPageComponent } from "./pages/registration-page/registration-page.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full'},
  { path: 'users', component: UsersListComponent, resolve: [qualitiesResolver, professionsResolver, usersResolver]},
  { path: 'users/:id', component: UserComponent, resolve: [qualitiesResolver, professionsResolver] },
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: RegistrationPageComponent, resolve: [qualitiesResolver, professionsResolver] },
  { path: '**', redirectTo: '/users' },

]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}