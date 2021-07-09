import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServiceForm } from '../common/service-form';
import { FormField } from '../common/service-form-field';
import { ServiceFormFieldGroup } from '../common/service-form-field-group';

@Component({
  selector: 'FormInput',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css'],
})
export class DynamicFormInputComponent {
  @Input() input: FormField<string>;
  @Input() form: FormGroup;
  @Input() serviceForm: ServiceForm;
  @Input() group: ServiceFormFieldGroup;
  @Output() dependencyFieldData = new EventEmitter();
  dependent: any;
  listOfdependentFields: FormField<string>[] = [];
  displayThis = false; 
  size: any;
  constructor() {
    console.log('---------', this.group);
  }
  get isValid() {
    //return this.form.controls[input.key].valid;
    return true;
  }

  onChange(key, value, dependents) {
    console.log('value--->', value);
    this.listOfdependentFields = [];
    this.serviceForm.groups.forEach((g) => {
      g.fields.forEach((field) => {
        if (field.dependency.is === value) {
          this.size = g.fields.length;
          console.log('length---->', this.size);
          dependents &&
            dependents.forEach((dependent) => {
              
              if (field.key === dependent) {
                this.displayThis = true;
                console.log('key', field.key, '-value:', dependent);
                //  this.form.get(field.key).enable();
                field.dependency.notShow = false;
                this.listOfdependentFields.push(field);
                console.log(
                  'this.listOfdependentFields',
                  this.listOfdependentFields
                );

                //  this.input.dependency.notShow = false;
              } else {
                //this.form.get(field.key).disable();
                this.displayThis = false
              }
            });
           
        }
      });
    });
    const data={listOfdependentFields:this.listOfdependentFields,displayThis:this.displayThis}
    this.dependencyFieldData.emit(data);
  }
}
