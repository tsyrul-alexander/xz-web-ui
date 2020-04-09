import { Component, OnInit } from '@angular/core';
import {Company} from "../../../../core/models/data/company/company";
import {BaseAddress} from "../../../../core/models/data/address/base-address";
import {Country} from "../../../../core/models/data/address/country";

@Component({
  selector: 'company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent implements OnInit {
  public company: Company = new Company();
  public country: Country = new Country();
  constructor() {
    this.company.address = new BaseAddress();
  }

  ngOnInit(): void {
  }

}
