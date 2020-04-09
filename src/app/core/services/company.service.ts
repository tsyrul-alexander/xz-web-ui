import {BaseHttpService} from "./base-http.service";
import {Observable, of} from "rxjs";
import {Guid} from "guid-typescript";
import {Company} from "../models/data/company/company";
import {MOCK_COMPANY_LIST} from "../../mock/mock-company";
import {Injectable} from "@angular/core";
import {BaseCompany} from "../models/data/company/base-company";

@Injectable()
export class CompanyService extends BaseHttpService {
	private url: string;

	public getCompany(id: Guid): Observable<Company> {
		let companies = MOCK_COMPANY_LIST.filter(value => value.id.equals(id));
		return of(companies[0]);
	}

	public addCompany(company: Company): Observable<any> {
		MOCK_COMPANY_LIST.push(company);
		return of(null);
	}

	public getCompanies(): Observable<BaseCompany[]> {
		return of(MOCK_COMPANY_LIST);
	}
}