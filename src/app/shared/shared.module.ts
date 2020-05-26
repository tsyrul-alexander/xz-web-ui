import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StringFormControlComponent } from './components/string-form-control/string-form-control.component';
import { PasswordFormControlComponent } from './components/password-form-control/password-form-control.component';
import { CheckboxControlComponent } from './components/checkbox-control/checkbox-control.component';
import { SectionViewTypeComponent } from './components/section-view-type/section-view-type.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {OverlayModule} from '@angular/cdk/overlay';
import { SectionViewComponent } from './components/section-view/section-view.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { StringLczFormControlComponent } from './components/string-lcz-form-control/string-lcz-form-control.component';
import { LczValueListModalComponent } from './components/lcz-value-list-modal/lcz-value-list-modal.component';
import { ModalViewComponent } from './components/modal-view/modal-view.component';
import {BaseModalComponent} from "./components/base-modal/base-modal.component";
import {ModalService} from "../core/services/modal-service";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
	declarations: [
		BaseModalComponent,
		StringFormControlComponent,
		PasswordFormControlComponent,
		CheckboxControlComponent,
		SectionViewTypeComponent,
		CountryListComponent,
		SectionViewComponent,
		StringLczFormControlComponent,
		LczValueListModalComponent,
		ModalViewComponent
	],
	imports: [
		MatDialogModule,
		CommonModule,
		OverlayModule,
		TranslateModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatAutocompleteModule,
		MatFormFieldModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatPaginatorModule
	],
	exports: [
		StringFormControlComponent,
		PasswordFormControlComponent,
		CheckboxControlComponent,
		SectionViewTypeComponent,
		CountryListComponent,
		SectionViewComponent,
		StringLczFormControlComponent
	],
	providers:[ModalService]
})
export class SharedModule { }
