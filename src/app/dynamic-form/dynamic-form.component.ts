import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServiceFormCategory } from '../common/service-form-category';
import { FormfieldControlService } from '../formfield-control.service';

@Component({
  selector: 'DynamicForm',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  // @Input() formFields: FormField<string>[] = [];
  @Input() formData: ServiceFormCategory;
  form: FormGroup;
  payLoad = ' ';

  constructor(private formfieldService: FormfieldControlService) {}

  ngOnInit(): void {
    console.log('formData:', this.formData);
    this.form = this.formfieldService.toServiceFormGroup(this.formData);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.form.reset();
  }
}
