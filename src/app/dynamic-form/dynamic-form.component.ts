import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServiceFormCategory } from './common/service-form-category';
import { FormField } from './common/service-form-field';
import { FormfieldControlService } from './formfield-control.service';


@Component({
  selector: 'DynamicForm',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  // @Input() formFields: FormField<string>[] = [];
  @Input() formData: ServiceFormCategory;
  form: FormGroup;
  displayThis: boolean;
  size: number;
  payLoad = ' ';
  listOfdependentFields: FormField<string>[] = [];


  constructor(private formfieldService: FormfieldControlService) { }

  ngOnInit(): void {
    console.log('formData:', this.formData);
    this.form = this.formfieldService.toServiceFormGroup(this.formData);

  }

  onChange(data) {
    const { dependentKeys, value } = data;
    // const value = data.value;
    if (dependentKeys) {
      this.formData.svcDetails.forms.forEach(ele => {
        ele.groups.forEach(element => {
          element.fields.forEach(elem => {
            dependentKeys.forEach(dependentKey => {
              if (dependentKey === elem.key) {
                console.log("dependentKey.dependency.is === elem.value && ", elem.dependency.is, "===", value)
                if (elem.dependency.is === value && elem.dependency.notShow) {
                  elem.dependency.notShow = false;
                } else {
                  elem.dependency.notShow = true
                }
              }

            })

          })
        })
      })
    }
    console.log("data**", data);


    this.size = this.listOfdependentFields.length;

    if (this.size > 0) {
      this.displayThis = true;
    } else {
      this.displayThis = false;
    }
    console.log("listOfdependentFields**", this.listOfdependentFields);
    console.log("this.displayThis**", this.displayThis);

  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.form.reset();
  }


}
