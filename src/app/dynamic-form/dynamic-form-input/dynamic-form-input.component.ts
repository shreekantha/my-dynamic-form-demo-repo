import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from 'src/app/common/service-form-field';

@Component({
  selector: 'FormInput',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css'],
})
export class DynamicFormInputComponent {
  @Input() input: FormField<string>;
  @Input() form: FormGroup;

  constructor() {
    console.log('---------', this.input);
  }
  get isValid() {
    return this.form.controls[this.input.key].valid;
  }

  myFunction(input) {
    console.log('input------>', input);
  }
}
