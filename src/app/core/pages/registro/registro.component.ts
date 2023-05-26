import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
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

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router , public dialog: MatDialog) {}

  ngOnInit() {

  }

  onSubmit() {
    this.loginService.register(this.loginForm.value).then( response => {  console.log(response); this.openDialog();this.router.navigate(['/login'])}).catch(error => this.valid = false);
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        ventana: 'registro',
      }
    });
  }
}
