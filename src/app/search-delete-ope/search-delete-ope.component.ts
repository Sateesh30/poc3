import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegServiceService } from '../user-reg-service.service';

@Component({
  selector: 'app-search-delete-ope',
  templateUrl: './search-delete-ope.component.html',
  styleUrls: ['./search-delete-ope.component.css']
})
export class SearchDeleteOpeComponent implements OnInit {


  users:any;
  name:string;
  message:any;
  id:number;
  user:any;
 
  constructor(private service: UserRegServiceService){ }

  public deleteUser(id:User){
   let resp =  this.service.deleteUser(id);
resp.subscribe((data)=>this.users=data);
  }
/* 
  public findUserByName(){
    let resp =  this.service.getUserByName(this.name);
 resp.subscribe((data)=>this.users=data);
   } */

  
   public findUserByText(){
    let resp= this.service.getUserByText(this.name);
    resp.subscribe((data)=>this.users=data);
   }

   updateUsers(){
    let resp = this.service.updateUser(this.id,this.user);
    resp.subscribe((data)=>this.message=data);
  }



  ngOnInit(): void {
   let resp = this.service.getUsers();
    resp.subscribe((data)=>this.users=data);

  }

}
