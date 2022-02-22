import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductListComponent} from "./Products/product-list.component";
import {FormsModule} from "@angular/forms";
import {ConvertToSpacesPipe} from "./Shared/convert-to-spaces.pipe";
import {StarComponent} from "./Shared/star.component";
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailComponent } from './Products/product-detail.component';
import {RouterModule} from "@angular/router";
import { WelcomeComponent } from './Home/welcome.component';
import { NotFoundComponent } from './Home/not-found.component';
import {ProductsDetailGuard} from "./Products/guards/products-detail.guard";

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ConvertToSpacesPipe,
        StarComponent,
        ProductDetailComponent,
        WelcomeComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,

        RouterModule.forRoot([
          {path: 'products', component: ProductListComponent},
          {
            path: 'products/:id',
            canActivate: [ProductsDetailGuard],
            component: ProductDetailComponent
          },
          {path: 'welcome',component: WelcomeComponent},
          {path: '404',component: NotFoundComponent},
          {path: '',redirectTo : 'welcome', pathMatch: 'full'},
          {path: '**',redirectTo : '404', pathMatch: 'full'}
        ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
