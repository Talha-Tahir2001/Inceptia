import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { FluidModule } from 'primeng/fluid';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-contact',
  imports: [
    TextareaModule,
    FloatLabelModule,
    ReactiveFormsModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    FluidModule,
    CardModule
  ],
  templateUrl: './contact.html',
  styles: ``,
})
export class Contact {
  fb = inject(FormBuilder);
  contactForm: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
