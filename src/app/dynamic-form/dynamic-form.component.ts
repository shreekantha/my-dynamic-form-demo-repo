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
    //Object Destructuring
    const { dependentKeys, value, formKey, dependentType } = data;

    if (dependentKeys) {
      switch (dependentType) {
        case "CONTROL":

          this.formFieldPrep(formKey, dependentKeys, value);
          break;

        case "FORM":

        this.formPrep(dependentKeys,value);
          break;
      }

    }

  }
  
  formPrep(dependentKeys: any, value: any) {
   this.formData.svcDetails.forms.forEach(form =>{
     console.log("form--->:",form)
     console.log("dependentKeys--->",dependentKeys)
   dependentKeys.forEach(element => {
    if(form.key === element ){
      console.log("form.key--->",form.key,"element--->",element);
      console.log("form.dependency.is--->",form.dependency.is,"value--->",value);

      if(form.dependency.is === value && form.dependency.notShow){
        form.dependency.notShow = false;
      }else{
        form.dependency.notShow = true;
      }
    }

  });

})

  }

  private formFieldPrep(formKey: any, dependentKeys: any, value: any) {
    this.formData.svcDetails.forms.find(form => form.key === formKey).
      // this.formData.svcDetails.forms.forEach(ele => {
      //   console.log("key ", ele.key)
      //   ele.
      groups.forEach(element => {
        element.fields.forEach(elem => {
          dependentKeys.forEach(dependentKey => {
            if (dependentKey === elem.key) {
              console.log("dependentKey.dependency.is === elem.value && ", elem.dependency.is, "===", value);
              if (elem.dependency.is === value && elem.dependency.notShow) {
                elem.dependency.notShow = false;
              } else {
                elem.dependency.notShow = true;
              }
            }

          });

        });
      });
    // })
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.form.reset();
  }


}
