import { Color } from './../../../interfaces/Videojuego.interfaces';
import { style } from '@angular/animations';
import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  mat-card-title{
    font-size: 2vw;
  }
  .login-card {
    max-width: 45vw;
    margin: 3vw;
  }
  h4{
    Color: red;
  }
  `]
})
export class LoginComponent implements OnInit {
  valid: boolean = true;
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  hide = true;


  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, public dialog: MatDialog) {}

  ngOnInit() {

  }

  onSubmit() {
    this.loginService.login(this.loginForm.value).then(response => {
      console.log(response); this.valid = true; 
      this.openDialog();
      this.router.navigate(['/menu']); 
      this.loginService.setUser(this.loginForm.value.email, response.user.uid) }).catch(error => this.valid = false);
  }

  onClick() {
    this.loginService.loginWithGoogle().then(response => {
      console.log(response); 
      this.router.navigate(['/menu']);
      this.loginService.setUser(response.user.email || '', response.user.uid) }).catch(error => console.log(error));
  }
  
  
  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        ventana: 'login',
      }
    });
  }