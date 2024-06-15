import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.educationForm = this.fb.group({
      institutionName: ['', Validators.required],
      course: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      start: ['', Validators.required],
      finish: ['', Validators.required],
      checkMe: [false, Validators.requiredTrue]
    })
  }

}
