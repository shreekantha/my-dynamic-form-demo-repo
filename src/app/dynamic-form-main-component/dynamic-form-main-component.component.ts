import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FormField } from 'src/app/common/service-form-field';
import { ServiceFormCategory } from '../common/service-form-category';
import { FormfieldControlService } from '../formfield-control.service';

@Component({
  selector: 'app-dynamic-form-main-component',
  templateUrl: './dynamic-form-main-component.component.html',
  styleUrls: ['./dynamic-form-main-component.component.css'],
})
export class DynamicFormMainComponentComponent {
  formFields: Observable<FormField<any>[]>;
  serviceFormCategory: Observable<ServiceFormCategory>;
  url: any;
  constructor(
    service: FormfieldControlService,
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.url = this.route.snapshot.queryParams['url'];
    console.log('url:{}', this.url);
    this.httpClient.get(this.url).subscribe((data) => {
      this.serviceFormCategory = of(data as ServiceFormCategory);
      // this.formFields = service.getFormFields(data);
      console.log('service form cat:', this.serviceFormCategory);
    });
  }
}
