import { Component } from '@angular/core';
import {AuthService} from "../../../../core/services/auth.service";
import {AuthInterceptor} from "../../../../core/interceptors/auth-interceptor";
import {ErrorResponse} from "../../../../core/models/response/error-response";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public login: string = "";
  public password: string = "";
  public isSaveData: boolean = false;

  constructor(private authService: AuthService) {  }

  loginClick() {
    this.authService.login(this.login, this.password).subscribe(response => {
        this.saveToken(response.token);
    }, (error: ErrorResponse) =>
      console.log(error.message)//todo
    );
  }
  saveToken(token: string) {
      AuthInterceptor.setToken(token, !this.isSaveData);
  }
}
