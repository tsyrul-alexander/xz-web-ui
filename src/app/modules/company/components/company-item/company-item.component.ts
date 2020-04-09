import {Component, OnInit} from '@angular/core';
import {BaseItemComponent} from "../../../../shared/components/base-item/base-item.component";
import {BaseCompany} from "../../../../core/models/data/company/base-company";

@Component({
  selector: 'company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss'],
  inputs:["item"],
})
export class CompanyItemComponent extends BaseItemComponent<BaseCompany> implements OnInit {
  //@Input()public item: CompanyItem;
  public defaultIconUrl: string = "https://i7.uihere.com/icons/358/544/847/company-d23ad282fb3350d9eab92ce12076a274.png";
  ngOnInit(): void {
  }

}
