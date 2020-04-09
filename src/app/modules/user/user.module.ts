import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSectionComponent } from './components/user-section/user-section.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [UserSectionComponent, UserPageComponent, UserItemComponent, UserAddComponent],
	imports: [
		CommonModule,
		SharedModule
	]
})
export class UserModule { }
