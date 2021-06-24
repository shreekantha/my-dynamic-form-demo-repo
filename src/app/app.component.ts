import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormField } from 'src/environments/form-field';
import { FormfieldControlService } from './formfield-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDynamicForms';
  // formFields: Observable<FormField<any>[]>;
  // constructor(service: FormfieldControlService,private httpClient: HttpClient,
  //   private router:Router) {
  //   // this.formFields = service.getFormFields();
  //   this.httpClient.get('/assets/DynamicFormData.json').subscribe( data => {
  //     this.formFields = service.getFormFields(data as []);
  //     this.formFields.forEach(a =>{
  //     })
  //   });
  // }

  
}
