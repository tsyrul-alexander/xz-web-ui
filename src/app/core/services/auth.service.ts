import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {BaseHttpService} from "./base-http.service";
import {LoginResponse} from "../models/response/login-response";
import {RegistrationResponse} from "../models/response/registration-response";
import {Registration} from "../models/registration";
import {RegistrationRequest} from "../models/request/registration-request";

@Injectable()
export class AuthService extends BaseHttpService {

  private url = "/api/auth";

  constructor(private http: HttpClient) {
    super()
  }

  login(login: string, password: string): Observable<LoginResponse> {
    return this.castObject(this.http.get<LoginResponse>(this.url + "/authorization/login" +
        "?login=" + login + "&password=" + password), LoginResponse);
  }
  registration(date: RegistrationRequest): Observable<RegistrationResponse> {
    return this.castObject(this.http.post<RegistrationResponse>(this.url + "/authorization/register", date),
        RegistrationResponse);
  }
}
