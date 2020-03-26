import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {BaseResponse} from "../models/response/base_response";
import {BaseHttpService} from "./base_http.service";

@Injectable()
export class LoginService extends BaseHttpService {

  private url = "localhost:8081";//todo /api/auth

  constructor(private http: HttpClient) {
    super()
  }

  login(login: string, password: string) : Observable<BaseResponse> {
    return this.castObject(this.http.get<BaseResponse>(this.url), BaseResponse);
  }
}
