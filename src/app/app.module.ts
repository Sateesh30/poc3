import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { SearchDeleteOpeComponent } from './search-delete-ope/search-delete-ope.component';
import { UserRegServiceService } from './user-reg-service.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { UserlistComponent } from './userlist/userlist.component';
@NgModule({
  declarations: [
    AppComponent,
    UserregistrationComponent,
    SearchDeleteOpeComponent,
    HomeComponent,
    UpdateComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserRegServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
