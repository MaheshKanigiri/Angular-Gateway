import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { UserFormComponent } from './components/product-form/user-form/user-form.component';
import { ProductComponent } from './components/product/product.component';
import { UsersComponent } from './components/product/users/users.component';

const routes: Routes = [
  {path:'user',component:UsersComponent},
  {path:'product',component:ProductComponent},
  {path:'product/:id',component:ProductFormComponent},
  {path: 'products/new', component: ProductFormComponent },
  {path:'user/:id',component:UserFormComponent},
  {path:'users/new',component:UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
