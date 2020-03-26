import {LOGIN_ROUTES} from "../login/login.routes";
import {Routes} from "@angular/router";
import {HOME_ROUTES} from "../home/home.routes";

export const APP_ROUTES: Routes = [
	{ path: '', children: HOME_ROUTES },
	{ path: 'login', children: LOGIN_ROUTES },
];