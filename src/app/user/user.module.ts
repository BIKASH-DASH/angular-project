import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './userlist/userlist.component';


@NgModule({
  declarations: [
    ListComponent,
    LoginComponent,
    UserlistComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
