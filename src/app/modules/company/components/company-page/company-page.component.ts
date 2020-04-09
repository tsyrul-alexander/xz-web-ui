import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Guid} from "guid-typescript";
import {CompanyService} from "../../../../core/services/company.service";
import {Company} from "../../../../core/models/data/company/company";

@Component({
  selector: 'company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit {
  private _initId: string;
  public company: Company;
  constructor(private route: ActivatedRoute, private companyService: CompanyService) {
    this._initId = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.companyService.getCompany(Guid.parse(this._initId)).subscribe(value => this.company = value);
  }

}
