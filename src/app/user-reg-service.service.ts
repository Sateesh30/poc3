import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserRegServiceService {

  constructor(private http:HttpClient) { }

  public isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}

  public doRegistration(user){
    return this.http.post("http://localhost:8000/add/users",user,{responseType: 'text' as 'json'});

  }

  public getUsers(){
    return this.http.get("http://localhost:8000/allusers");
  }

  public getUserBysurName(surname){
    return this.http.get("http://localhost:8000/usersbysurname/"+surname);
  }

  public getUserByName(name){
    return this.http.get("http://localhost:8000/usersbyname/"+name);
  }

  public getUserByPincode(pincode){
    return this.http.get("http://localhost:8000/usersbypincode/"+pincode);
  }

  public getUserById(id){
    return this.http.get("http://localhost:8000/usersbyid/"+id);
  }


  public getUserByText(name){
    console.log(name);
    return this.http.get("http://localhost:8000/User/search/all/"+name+"/"+name+"/"+name);
    
     
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:8000/delete/users/"+id);
  }

  public updateUser(id:number, user:User){
    return this.http.put("http://localhost:8000/update/users/"+id,user);
  }

}
