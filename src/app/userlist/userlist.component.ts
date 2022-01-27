import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  user:any;
  id: number;


  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
    
  }

  updateUser(id: number){
    this.router.navigate(['update',id]);

  }

}
