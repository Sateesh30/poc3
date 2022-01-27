import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegServiceService } from '../user-reg-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id:any;

  message:any;
  //user: User = new User("","","",new Date(),new Date(),"","","");
  user:any;
  constructor(private service: UserRegServiceService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
     this.user = new User("","","",new Date(),new Date(),"","","");
    this.id = this.route.snapshot.params['id'];
    this.service.getUserById(this.id).subscribe(
      data=>{console.log(data)
      this.user=data;
      },
      error=>console.log(error)); 
    
  }

updateUsers(){
  this.service.updateUser(this.id,this.user).subscribe(
    data=>console.log(data),error=>console.error());
    this.user  = new User("","","",new Date(),new Date(),"","","");
    this.router.navigate['/register'];


} 




}
