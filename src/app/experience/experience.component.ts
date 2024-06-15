import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienceForm!: FormGroup

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.experienceForm = this.fb.group({
      employer: ['', Validators.required],
      company: ['', Validators.required],
      address: ['', Validators.required],
      role: ['', Validators.required],
      start: ['', Validators.required],
      finish: ['', Validators.required],
      checkme: [false, Validators.requiredTrue]
    })
  }

}
