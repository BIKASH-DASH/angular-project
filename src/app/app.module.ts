import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatSliderModule } from '@angular/material/slider'
import { TableModule } from 'smart-webcomponents-angular/table';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { TooltipModule } from 'smart-webcomponents-angular/tooltip';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomStyleDirective } from './custom-style.directive';
import {HttpClientModule} from '@angular/common/http';
import { AdminModule } from "./admin/admin.module";
import {UserModule} from './user/user.module';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UserlistComponent } from './userlist/userlist.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CustomStyleDirective,
    AdminlistComponent,
    UserlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    TableModule,
    ButtonModule,
    TooltipModule,
    HttpClientModule,
    AdminModule,
    UserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
