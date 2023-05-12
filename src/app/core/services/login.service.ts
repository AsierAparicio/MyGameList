import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  log: boolean = false;
  user: string = '';
  constructor(private auth: Auth) { }

  register({email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  setUser(name: string){
    this.user = name;
    this.log = true;
  }

  getUser(){
    return this.user 
  }

  logOut(){
    this.user = '';
    this.log = false;
  }
}
