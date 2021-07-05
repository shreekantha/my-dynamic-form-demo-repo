import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Dependency } from '../common/dependency';
import { ServiceForm } from '../common/service-form';
import { FormField } from '../common/service-form-field';

@Component({
  selector: 'FormInput',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css'],
})
export class DynamicFormInputComponent {
  @Input() input: FormField<string>;
  @Input() form: FormGroup;
  @Input() serviceForm:ServiceForm;
  dependent:any;
  listOfanotherInput :FormField<string>[] = [];
  displayThis = false;
  size:any;
  constructor() {
    console.log('---------', this.input);
  }
  get isValid() {
    return this.form.controls[this.input.key].valid;
  }

  onChange(key,value,dependents) {
    
    console.log("value--->",value)
    this.listOfanotherInput =[];
    this.serviceForm.groups.forEach(g=>{
      g.fields.forEach(field=>{
        if(field.dependency.is === value){   
           this.size =  g.fields.length;
          console.log("length---->",this.size);   
        dependents && dependents.forEach(ff=>{
          if(field.key===ff){   
            this.displayThis = true;
            console.log("key",field.key,"-value:",ff);
            this.listOfanotherInput.push(field);
            console.log("this.listOfanotherInput",this.listOfanotherInput)
            this.input.dependency.notShow=false;
          }
        })
      }
      })
    })
    
  }
}
