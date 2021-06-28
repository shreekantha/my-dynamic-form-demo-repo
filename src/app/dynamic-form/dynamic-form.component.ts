import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServiceFormCategory } from '../common/service-form-category';
import { FormfieldControlService } from '../formfield-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  // @Input() formFields: FormField<string>[] = [];
  @Input() serviceFormCatagory: ServiceFormCategory;
  form: FormGroup;
  payLoad = ' ';

  constructor(private formfieldService: FormfieldControlService) {}

  ngOnInit(): void {
    console.log('serviceFormCatagory:', this.serviceFormCatagory);
    this.form = this.formfieldService.toServiceFormGroup(
      this.serviceFormCatagory
    );
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.form.reset();
  }
}
