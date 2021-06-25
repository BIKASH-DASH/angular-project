import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import {LoginsComponent} from './users/logins/logins.component';
import { ListComponent } from './users/list/list.component';

const routes: Routes = [  
  {
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: 'users',
    component: LoginsComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
