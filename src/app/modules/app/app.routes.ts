import {AUTH_ROUTES} from "../auth/auth.routes";
import {Routes} from "@angular/router";
import {HOME_ROUTES} from "../home/home.routes";

export const APP_ROUTES: Routes = [
	{ path: '', children: HOME_ROUTES },
	{ path: 'auth', children: AUTH_ROUTES },
];