import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  shoulDisplayPassword: boolean = false;
  eyeIconClosed: string = "../../../assets/eye-closed.svg"
  eyeIconOpen: string = "../../../assets/eye-open.svg"
  loginForm: FormGroup = this.formBuilder.group({
    email: '',
    password: ''
  })
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  setEyeIcon(){
    this.shoulDisplayPassword = !this.shoulDisplayPassword
  }

  getEyeIcon(){
    return this.shoulDisplayPassword ? this.eyeIconOpen : this.eyeIconClosed
  }

  onSubmit(){
    this.router.navigate(['home'])
  }

  redirectToRegister(){
    this.router.navigate(['registrar'])
  }

}
