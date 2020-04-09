import {Routes} from "@angular/router";
import {CompanySectionComponent} from "./components/company-section/company-section.component";
import {CompanyPageComponent} from "./components/company-page/company-page.component";
import {CompanyAddComponent} from "./components/company-add/company-add.component";

export const COMPANY_ROUTES: Routes  = [
	{ path: 'section', component: CompanySectionComponent },
	{ path: 'page/:id', component: CompanyPageComponent },
	{ path: 'add', component: CompanyAddComponent }
];