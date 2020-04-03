import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {BaseHttpService} from "./base_http.service";
import {LoginResponse} from "../models/response/login_response";

@Injectable()
export class AuthService extends BaseHttpService {

  private url = "/api/auth";

  constructor(private http: HttpClient) {
    super()
  }

  login(login: string, password: string) : Observable<LoginResponse> {
    return this.castObject(this.http.get<LoginResponse>(this.url + "/authorization/login" +
        "?login=" + login + "&password=" + password), LoginResponse);
  }
}
