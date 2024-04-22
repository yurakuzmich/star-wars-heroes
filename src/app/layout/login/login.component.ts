import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  usernameControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', Validators.required);

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: this.usernameControl,
      password: this.passwordControl,
    });
  }

  submitLogin(e: any) {
    e.preventDefault();
    this.validateForm();

    if(!this.loginForm.valid) return;

    const { username, password } = this.loginForm.value;
    if(this.loginService.login(username, password)) {
      console.log('login success');
      this.router.navigate(['/']);
    };
  }

  validateForm() {
    Object.values(this.loginForm.controls).forEach(control => control.markAsTouched());
  }
}
