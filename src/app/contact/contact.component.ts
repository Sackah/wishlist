import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { invalidDomain } from './invalidDomain';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  // constructor() {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      senderName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]*$/),
      ]),
      senderEmail: new FormControl('', [
        Validators.required,
        Validators.email,
        invalidDomain,
      ]),
      senderMessage: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  submitForm(event: Event) {
    event.preventDefault();
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.contactForm.reset();
    }
  }
}
