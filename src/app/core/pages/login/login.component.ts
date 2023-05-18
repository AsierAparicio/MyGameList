import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  .login-card {
    max-width: 500px;
    margin: 32px;
}
  `]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  hide = true;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {}

  ngOnInit() {

  }

  onSubmit() {
    this.loginService.login(this.loginForm.value).then( response => {  console.log(response); this.router.navigate(['/menu']); this.loginService.setUser(this.loginForm.value.email, response.user.uid)}).catch(error => console.log(error));
  }

  onClick(){
    this.loginService.loginWithGoogle().then( response => {  console.log(response); this.router.navigate(['/menu']); this.loginService.setUser(response.user.email || '', response.user.uid)}).catch(error => console.log(error));
  }
}
