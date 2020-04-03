import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./components/login/login.component";
import {AuthService} from "../../core/services/auth.service";
import {HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AuthInterceptor} from "../../core/interceptors/auth-interceptor";
import {TranslateModule} from "@ngx-translate/core";
import { RegistrationComponent } from './components/registration/registration.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {BaseControlValueAccessor} from "../../core/form/base-control-value-accessor";

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, TranslateModule, RouterModule, SharedModule],
  providers: [
      AuthService,
      BaseControlValueAccessor,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class AuthModule { }
