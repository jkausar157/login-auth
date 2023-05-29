import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  apiurl='http://localhost:3000/user';

  // geta all data via get method
  getAll(){
    return this.http.get(this.apiurl)
  }

 // get all role
  getAllRole(){
    return this.http.get("http://localhost:3000/role");
  }

  // get record by single id
  getbyid(code:any){
    return this.http.get(this.apiurl+'/'+code)
  }

  // register user by post method
  proceedRegister(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }

  // update user by put method
  updateUser(code:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+code,inputdata)
  }

  // get username
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }

  // get user role
  getUserRole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }

 

  
}
