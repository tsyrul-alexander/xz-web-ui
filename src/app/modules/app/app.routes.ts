import {AUTH_ROUTES} from "../auth/auth.routes";
import {Routes} from "@angular/router";
import {HOME_ROUTES} from "../home/home.routes";
import {COMPANY_ROUTES} from "../company/company.routes";
import {USER_ROUTES} from "../user/components/user.routes";

export const APP_ROUTES: Routes = [
	{ path: '', children: HOME_ROUTES },
	{ path: 'auth', children: AUTH_ROUTES },
	{ path: 'company', children: COMPANY_ROUTES },
	{ path: 'user', children: USER_ROUTES }
];