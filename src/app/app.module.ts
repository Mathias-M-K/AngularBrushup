import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { WelcomeComponent } from './Home/welcome.component';
import { NotFoundComponent } from './Home/not-found.component';
import { ProductModule } from './products/product.module';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import { AnimationPanelComponent } from './Home/animation-panel/animation-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        NotFoundComponent,
        AnimationPanelComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '404', component: NotFoundComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: '404', pathMatch: 'full'}
    ]),
    ProductModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
