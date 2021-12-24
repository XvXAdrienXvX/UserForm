import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { UserModel } from '../ViewModels/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public userArray: UserModel[] = [];
  public isEditable: boolean = false;
  public hideEditButton: boolean = false;
  public enableEditIndex = null;

  constructor(
    private userService:UserService,
    private router: Router
  ) 
  { 
    
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(data =>{
      this.userArray = data;
    })
  }
  setEditMode(index){
    this.enableEditIndex = index;
    this.isEditable = true;
    this.hideEditButton = true;
  }

  resetEditMode() {
    this.enableEditIndex = null;
    this.isEditable = false;
    this.hideEditButton = false;
  }

  updateUser(user:UserModel) {
    this.enableEditIndex = null;
    this.isEditable = false;
    this.hideEditButton = false;
    this.userService.updateUser(user).subscribe(data =>{
      this.getAllUsers();
    })
  }

  goToUserFormPage(){  
     this.router.navigate([""]);
  }

  removeUser(user:UserModel){
     this.userService.removeUser(user).subscribe(data =>{
      this.getAllUsers();
     })
  }
}