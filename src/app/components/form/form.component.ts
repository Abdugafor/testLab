import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  private http: HttpClient = inject(HttpClient)
  private fb: FormBuilder = inject(FormBuilder)

  feedbackForm: FormGroup;
  isError: boolean = false;

  constructor() {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      isAgreed: [false, Validators.requiredTrue]
    });
  }


  onSubmit() {
    this.feedbackForm.markAllAsTouched();
      const feedback = this.feedbackForm.value;
      this.http.post('http://localhost:3000/feedbacks', feedback).subscribe({
        next: res =>{
          this.feedbackForm.reset()
        },
        error: err => {
          console.error(err);
          this.isError = true;
        }
      });
    }
}
