import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import {LoginModule} from "../login/login.module";
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";


@NgModule({
  declarations: [AppComponent],
  bootstrap:    [AppComponent],
  imports: [LoginModule, BrowserModule, RouterModule.forRoot(APP_ROUTES)]
})
export class AppModule { }
