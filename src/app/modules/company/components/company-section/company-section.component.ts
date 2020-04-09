import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../../../../core/services/company.service";
import {BaseSectionComponent} from "../../../../shared/components/base-section/base-section.component";
import {BaseCompany} from "../../../../core/models/data/company/base-company";

@Component({
  selector: 'company-section',
  templateUrl: './company-section.component.html',
  styleUrls: ['./company-section.component.scss']
})
export class CompanySectionComponent extends BaseSectionComponent<BaseCompany> implements OnInit {

  constructor(private companyService: CompanyService) {
    super();
  }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(value =>
        this.items = value
    );
  }
}
