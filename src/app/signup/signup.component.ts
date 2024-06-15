import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      mobileNo: ['',[ Validators.required,Validators.pattern(/^[6-9]\d{9}$/)] ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    })

  }
  onSubmit() {
    if (this.signupForm.valid) {
      this.apiService.signIn(this.signupForm.value).subscribe(() => {
        this.router.navigate(['login'])
      }, (error) => {
        console.log(error);

      });


      
      }
  }

}
