import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { UserModel } from '../ViewModels/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userModel: UserModel = new UserModel();
  

  constructor(
    private userService:UserService,
    private router: Router
  ) 
  { 
    
  }

  ngOnInit(): void {
  }

  createUser(){
    this.userService.addUser(this.userModel).subscribe(data =>{
      console.log(data)
    })
  }

  goToUserDetails() {
    this.router.navigate(["userdetail"]);
  }
}
