import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router : Router , private auth : AuthService){

  }


  canActivate():boolean{
    if(this.auth.checkToken()){
      return true;
    }
    else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  
}
