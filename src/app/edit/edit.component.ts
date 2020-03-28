import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { Notification } from 'rxjs';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm= this.fb.group({});
  formSubmitted = false;
  user:User;
  private notifier: NotifierService;
  constructor(private router:Router, private userService:UsersService,private fb:FormBuilder,notify:NotifierService) {
    this.notifier = notify;
   }


  ngOnInit(): void {
//Validation
    this.editForm.addControl('id',new FormControl('',[Validators.required]));
    this.editForm.addControl('name',new FormControl('',[Validators.required]));
    this.editForm.addControl('email',new FormControl('',[Validators.required]));
    this.editForm.addControl('phone',new FormControl('',[Validators.required]));
    this.editForm.addControl('city',new FormControl('',[Validators.required]));


    let userId = window.localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['']);
      return;
    }

    this.userService.getUserById(+userId)
      .subscribe( user => {
        debugger;
        this.editForm.get('id').setValue(user.id);
        this.editForm.get('name').setValue(user.name);
        this.editForm.get('email').setValue(user.email);
        this.editForm.get('phone').setValue(user.phone);
        this.editForm.get('city').setValue(user.city);
      });
  }
  onSave(){
    this.user = Object.assign({}, this.editForm.value);
    this.userService.updateUser(this.user).subscribe(() => {
      this.notifier.notify('success','User Added Successfully.');
      this.router.navigate(['']);
     });

  }

}
