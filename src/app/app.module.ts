import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from "angular-notifier";
import { ConfermationComponent } from './confermation/confermation.component';
import { MyTitleCasePipe } from './my-title-case.pipe';


@NgModule({
   declarations: [
      AppComponent,
      EditComponent,
      ListComponent,
      AddComponent,
      ConfermationComponent,
      MyTitleCasePipe
   ],
   imports: [
      BrowserModule,
      RouterModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      NotifierModule
   ],
   providers: [
      UsersService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
