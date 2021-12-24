 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { UserDetailComponent } from './user-detail.component';
 
@NgModule({
  declarations: [UserComponent, UserDetailComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService]
})
export class UserModule { }
 