import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicFormInputComponent } from './dynamic-form-input/dynamic-form-input.component';
import { DynamicFormComponent } from './dynamic-form.component';

@NgModule({
  declarations: [DynamicFormComponent, DynamicFormInputComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
})
export class DynamicFormModule {}
