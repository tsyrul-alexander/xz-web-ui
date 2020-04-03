import {Component} from '@angular/core';
import {Registration} from "../../../../core/models/registration";
import {ErrorResponse} from "../../../../core/models/response/error-response";
import {AuthService} from "../../../../core/services/auth.service";
import {RegistrationRequest} from "../../../../core/models/request/registration-request";
import {AuthInterceptor} from "../../../../core/interceptors/auth-interceptor";

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  public model: Registration = new Registration();

  constructor(private authService: AuthService) {  }

  registrationClick() {
    this.authService.registration(new RegistrationRequest(this.model)).subscribe(response => {
        AuthInterceptor.setToken(response.token, true);
      }, (error: ErrorResponse) => console.log(error.message)//todo
    );
  }

}
