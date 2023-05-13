import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  log: boolean = false;
  user: string = '';
  userId: string = '0';
  constructor(private auth: Auth) { }

  register({email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  setUser(name: string, id: string){
    this.user = name;
    this.log = true;
    this.userId = id;
  }

  getUser(){
    return this.user 
  }

  getId(){
    return this.userId
  }

  logOut(){
    this.user = '';
    this.log = false;
    this.userId = '0';
  }
}
