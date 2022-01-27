import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchDeleteOpeComponent } from './search-delete-ope/search-delete-ope.component';
import { UpdateComponent } from './update/update.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"userlist",component:UserlistComponent},
  {path:"register",component:UserregistrationComponent},
  {path:"search",component:SearchDeleteOpeComponent},
  {path:"update/:id",component:UpdateComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
