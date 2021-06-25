import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginsComponent } from './logins/logins.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    LoginsComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginsComponent,
    ListComponent
  ]
})
export class UsersModule { }
