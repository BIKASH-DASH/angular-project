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
import { HtmlelementsModule} from './htmlelements/htmlelements.module';
import { RootComponent } from './root/root.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomStyleDirective } from './custom-style.directive';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    UsersComponent,
    UserComponent,
    AdminComponent,
    PageNotFoundComponent,
    CustomStyleDirective,
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
    HtmlelementsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
