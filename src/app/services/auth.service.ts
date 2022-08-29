import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Base_url = 'http://apolis-grocery.herokuapp.com/api';

  constructor(private http : HttpClient) { }

  post(data:any){
    return this.http.post(`${this.Base_url}/auth/register` , data);
  }
  postlogin(data:any){
    return this.http.post(`${this.Base_url}/auth/login` , data)
  }

  checkToken() : boolean{
    if(localStorage.getItem('token')){
        return true;
    }
    else{
      return false;
    }
  }
}
