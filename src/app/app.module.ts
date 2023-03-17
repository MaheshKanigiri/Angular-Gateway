import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductFormComponent } from './components/product-form/product-form.component'
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './components/product/users/users.component';
import { UserFormComponent } from './components/product-form/user-form/user-form.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductFormComponent,
    UsersComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
