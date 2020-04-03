import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";
import { StringFormControlComponent } from './components/string-form-control/string-form-control.component';
import { PasswordFormControlComponent } from './components/password-form-control/password-form-control.component';

@NgModule({
  declarations: [
      StringFormControlComponent,
      PasswordFormControlComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule
  ],
  exports: [
      StringFormControlComponent,
      PasswordFormControlComponent
  ]
})
export class SharedModule { }