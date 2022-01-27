import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegServiceService } from '../user-reg-service.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {

  //user:User=new User(0,"","",0,"","","","",0);
  //user: User=new User("","",0,"","","","",0);
user: User = new User("","","",new Date(),new Date(),"","","");
  message:any;
  constructor(private service: UserRegServiceService) { }

  ngOnInit(): void {
  }



public registerNow(){
let resp = this.service.doRegistration(this.user);
resp.subscribe((data)=>this.message=data);
}

}
