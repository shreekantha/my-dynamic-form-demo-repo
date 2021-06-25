import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { of } from 'rxjs';
import { FormField } from 'src/app/common/service-form-field';
import { ServiceFormCategory } from './common/service-form-category';

@Injectable({
  providedIn: 'root',
})
export class FormfieldControlService {
  constructor() {}

  toFormGroup(inputs: FormField<string>[]): FormGroup {
    const group: any = {};
    inputs.forEach((input) => {
      let validator: ValidatorFn[] = input.required
        ? [Validators.required]
        : [];
      switch (input.validator) {
        case 'email':
          validator.push(Validators.email);
          break;
        case 'mobilenumber':
          validator.push(Validators.pattern('[6-9]\\d{9}'));
          break;
        default:
          break;
      }
      group[input.key] =
        validator.length > 0
          ? new FormControl(input.value || '', validator)
          : new FormControl(input.value || '');
    });

    return new FormGroup(group);
  }

  toServiceFormGroup(category: ServiceFormCategory): FormGroup {
    const group: any = {};

    console.log("category:{}",category);
    category.forms.forEach((form) => {
      form.fields.forEach((input) => {
        let validator: ValidatorFn[] = input.required
          ? [Validators.required]
          : [];
        switch (input.validator) {
          case 'email':
            validator.push(Validators.email);
            break;
          case 'mobilenumber':
            validator.push(Validators.pattern('[6-9]\\d{9}'));
            break;
          default:
            break;
        }
        group[input.key] =
          validator.length > 0
            ? new FormControl(input.value || '', validator)
            : new FormControl(input.value || '');
      });
    });

    return new FormGroup(group);
  }

  getFormFields(data: any) {
    const inputs: FormField<string>[] = [];
    data.forEach((element) => {
      inputs.push(new FormField<string>(element));
    });

    return of(inputs.sort((a, b) => a.order - b.order));
  }
}
