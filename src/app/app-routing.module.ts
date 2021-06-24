import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HtmlelementsModule} from './htmlelements/htmlelements.module'
import { QuerybuilderComponent } from './htmlelements/querybuilder/querybuilder.component';
import {RootComponent} from './root/root.component'
import { AppComponent } from "./app.component";
import { UserComponent} from './user/user.component'
import {AdminComponent} from './admin/admin.component'
const routes: Routes = [
  {
    path:"user",
    component: UserComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: '',
    component: AppComponent
  },
    {
    path: 'login',
    component: RootComponent
  },
  {
    path: 'smart',
    component: QuerybuilderComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
