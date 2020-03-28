import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  user: User;
  private notifier: NotifierService;
  constructor(private fb:FormBuilder, private route: ActivatedRoute,
    private router: Router,private userService:UsersService,notifierService: NotifierService) { 
      this.notifier = notifierService;
    }
  formSubmitted = false;
  userForm = this.fb.group({});
  ngOnInit(): void {
    this.userForm.addControl('id',new FormControl('',[Validators.required]));
    this.userForm.addControl('name',new FormControl('',[Validators.required]));
    this.userForm.addControl('email',new FormControl('',[Validators.required]));
    this.userForm.addControl('phone',new FormControl('',[Validators.required]));
    this.userForm.addControl('city',new FormControl('',[Validators.required]));
    // this.getUserById();
  
  }


  save():void{

    this.formSubmitted = true;
    if(!this.userForm.valid){
      return;
    }
    this.user = Object.assign({}, this.userForm.value);
    this.userService.addNewUser(this.user).subscribe(() => {
      this.notifier.notify('success','User Added Successfully.');
     },err =>{
      alert(err);
     });
    this.router.navigate(['/list']);
  }



}
