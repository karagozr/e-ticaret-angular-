import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  loggedIn=false;

  login(user:User):boolean{
    if(user.userName=="kara"&&user.password=="123"){
      this.loggedIn=true;
      localStorage.setItem("isLogged",user.userName);
      return true;
    }else{
      return false;
    }
  }

  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  }

  isLoggedIn(){
    return this.loggedIn;
  }
}
