import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanySectionComponent } from './components/company-section/company-section.component';
import { CompanyItemComponent } from './components/company-item/company-item.component';
import {CompanyService} from "../../core/services/company.service";
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { CompanyAddComponent } from './components/company-add/company-add.component';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import { CategoryAddComponent } from './components/category-add/category-add.component';

@NgModule({
  declarations: [CompanySectionComponent, CompanyItemComponent, CompanyPageComponent, CompanyAddComponent, CategoryAddComponent],
	imports: [
		CommonModule, SharedModule, TranslateModule, RouterModule, FormsModule, MatCardModule
	],
  providers: [CompanyService]
})
export class CompanyModule { }
