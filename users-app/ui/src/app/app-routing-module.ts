import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { UsersListComponent } from "./pages/users/users-list/users-list.component";

const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: LoginPageComponent },
  { path: '', component: UsersListComponent },
  { path: '**', redirectTo: '' },

]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}