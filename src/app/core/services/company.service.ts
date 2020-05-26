import {BaseHttpService} from "./base-http.service";
import {Observable, of} from "rxjs";
import {Guid} from "guid-typescript";
import {Company} from "../models/data/company/company";
import {Injectable} from "@angular/core";
import {BaseCompany} from "../models/data/company/base-company";

@Injectable()
export class CompanyService extends BaseHttpService {
	private url: string = "/api/data";



	public getCompany(id: Guid): Observable<Company> {
		return of(null);
	}

	public addCompany(company: Company): Observable<any> {
		return of(null);
	}

	public getCompanies(): Observable<BaseCompany[]> {
		return new Observable<BaseCompany[]>(subscriber => {
			setTimeout(() => {
				subscriber.next(null)
			}, 5000)
		})
		//return this.http.post<BaseCompany[]>(this.url + "/company/list", {

		//});
	}
}