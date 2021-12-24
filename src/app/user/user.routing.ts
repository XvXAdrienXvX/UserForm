import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';
import { UserComponent } from './user.component';

const UserRoutes: Routes = [
 { path: 'user', component: UserComponent},
 { path: 'userdetail', component: UserDetailComponent}
];
 
@NgModule({
  imports: [RouterModule.forChild(UserRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }