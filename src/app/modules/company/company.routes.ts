import {Routes} from "@angular/router";
import {CompanySectionComponent} from "./components/company-section/company-section.component";
import {CompanyPageComponent} from "./components/company-page/company-page.component";
import {CompanyAddComponent} from "./components/company-add/company-add.component";
import {CategoryAddComponent} from "./components/category-add/category-add.component";

export const COMPANY_ROUTES: Routes  = [
	{ path: 'section', component: CompanySectionComponent },
	{ path: 'page/:id', component: CompanyPageComponent },
	{ path: 'add', component: CompanyAddComponent },
	{ path: 'category/add', component: CategoryAddComponent }
];