import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { UsersListComponent } from "./pages/users/users-list/users-list.component";
import { UserComponent } from "./pages/users/user/user.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full'},
  { path: 'users',
    component: UsersListComponent, 
    // children: [
    //   { path: ':id', component: UserComponent }
    // ] 
  },
  { path: 'users/:id', component: UserComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: LoginPageComponent },
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