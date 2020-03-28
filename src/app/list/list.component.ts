import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { NotifierService } from "angular-notifier";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userList;
  private readonly notifier: NotifierService;
  constructor(private service: UsersService,notifierService: NotifierService, private router:Router) { }

  ngOnInit(): void {
   
    this.service.getUsers().subscribe(next => {
      debugger;
      this.userList = next
    });
  }


  showEditUserForm(user){
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit']);
  }

  deleteUser(user){
    if(confirm("Are you sure to delete this record")) {
      this.service.deleteUser(user.id)
      .subscribe( data => {
        this.userList = this.userList.filter(u => u !== user);
      })
    }
  }

}
