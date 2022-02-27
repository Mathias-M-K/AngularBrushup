import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { WelcomeComponent } from './Home/welcome.component';
import { NotFoundComponent } from './Home/not-found.component';
import { ProductModule } from './products/product.module';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        NotFoundComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '404', component: NotFoundComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: '404', pathMatch: 'full'}
    ]),
     ProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
