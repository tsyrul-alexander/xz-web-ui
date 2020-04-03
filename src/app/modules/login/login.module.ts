import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./components/login/login.component";
import {AuthService} from "../../core/services/auth.service";
import {HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AuthInterceptor} from "../../core/interceptors/auth_interceptor";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, TranslateModule],
  providers: [
      AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class LoginModule { }
