import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: Auth) { }

  register({email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  setUser(name: string, id: string){
    localStorage.setItem('name', JSON.stringify(name));
    localStorage.setItem('id', JSON.stringify(id));
    localStorage.setItem('sesion', JSON.stringify(true));
  }

  getUser(){
    return JSON.parse(localStorage.getItem('name') || '');
  }

  getId(){
    return JSON.parse(localStorage.getItem('id') || '0');
  }

  logOut(){
    localStorage.setItem('name', JSON.stringify(''));
    localStorage.setItem('id', JSON.stringify('0'));
    localStorage.setItem('sesion', JSON.stringify(false));
  }
}
