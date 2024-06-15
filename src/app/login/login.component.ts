import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup,Validators } from '@angular/forms';
import {Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.apiService.login(this.loginForm.value).subscribe(() => {   
        console.log('Login successful');
        this.router.navigate(['/home'])
        }, (error) => {
          console.log('Error:', error);
          });
    }
 }

}
