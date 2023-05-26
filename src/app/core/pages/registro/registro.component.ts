import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [`
   mat-card-title{
    font-size: 2vw;
  }
  p{
    margin-top: -20%;
    color: lightgray;
  }
  h4{
    color: red;
  }
  .login-card {
    max-width: 45vw;
    margin: 3vw;
}
  `]
})
export class RegistroComponent implements OnInit{
  valid = true;
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  hide = true;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {}

  ngOnInit() {

  }

  onSubmit() {
    this.loginService.register(this.loginForm.value).then( response => {  console.log(response); this.router.navigate(['/login'])}).catch(error => this.valid = false);
  }

}
