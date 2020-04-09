import {Routes} from "@angular/router";
import {UserSectionComponent} from "./user-section/user-section.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {UserAddComponent} from "./user-add/user-add.component";

export const USER_ROUTES: Routes = [
	{path: 'section', component: UserSectionComponent},
	{path: 'page', component: UserPageComponent},
	{path: 'add', component: UserAddComponent}
];