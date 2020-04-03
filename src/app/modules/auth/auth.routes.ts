import {LoginComponent} from "./components/login/login.component";
import {Routes} from "@angular/router";
import {RegistrationComponent} from "./components/registration/registration.component";

export const AUTH_ROUTES: Routes  = [
	{ path: 'login', component: LoginComponent },
	{ path: 'registration', component: RegistrationComponent }
];