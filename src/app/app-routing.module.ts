import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HtmlelementsModule} from './htmlelements/htmlelements.module'
import { QuerybuilderComponent } from './htmlelements/querybuilder/querybuilder.component';
import {RootComponent} from './root/root.component'
import { AppComponent } from "./app.component";
const routes: Routes = [
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
