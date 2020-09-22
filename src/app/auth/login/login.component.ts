import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from 'src/app/model/User';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[];
  dataSource = new MatTableDataSource<User>(this.users);
  displayedColumns: string[] = ['userId', 'userName', 'userMail', 'userPassword', 'status'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  public getAllUsers() {
    let resp = this.userService.findAll();
    resp.subscribe(report => this.dataSource.data = report as User[]);
  }

} 
