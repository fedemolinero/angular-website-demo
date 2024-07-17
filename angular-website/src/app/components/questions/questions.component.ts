import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      contactNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Aquí puedes manejar la lógica de envío del formulario
      console.log(this.myForm.value);
    } else {
      // Aquí puedes manejar la validación del formulario si lo necesitas
    }
  }
}
