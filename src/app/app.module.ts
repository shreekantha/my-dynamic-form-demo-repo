import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormInputComponent } from './dynamic-form-input/dynamic-form-input.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormMainComponentComponent } from './dynamic-form-main-component/dynamic-form-main-component.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormInputComponent,
    DynamicFormComponent,
    DynamicFormMainComponentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
