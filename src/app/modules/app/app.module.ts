import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import {LoginModule} from "../login/login.module";
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  bootstrap:    [AppComponent],
  imports: [
    LoginModule,
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'app/translate/', '.json');
}
