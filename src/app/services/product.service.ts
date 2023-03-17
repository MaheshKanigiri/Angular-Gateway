import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/product.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  gatewayUrl="https://localhost:7296/gateway/"

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.gatewayUrl+'Product');
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.gatewayUrl+'User');
  }

  getProductById(id:string):Observable<any>{
    return this.http.get<any>(this.gatewayUrl+'Product/'+id)
  }
  getUserById(id:string):Observable<any>{
    return this.http.get<any>(this.gatewayUrl+'User/'+id)
  }

  deleteProduct(id:string):Observable<any>{
    return this.http.delete<any>(this.gatewayUrl+'Product/'+id)
  }

  deleteUser(id:string):Observable<any>{
    return this.http.delete<any>(this.gatewayUrl+'User/'+id)
  }

  addProduct(product:Product):Observable<any>{
    return this.http.post<any>(this.gatewayUrl+'Product',product)
  }

  addUser(user:User):Observable<any>{
    return this.http.post<any>(this.gatewayUrl+'User',user)
  }

  updateProduct(id:string,product:Product):Observable<any>{
    return this.http.put<any>(this.gatewayUrl+'Product/'+id,product)
  }
  updateUser(id:string,user:User):Observable<any>{
    return this.http.put<any>(this.gatewayUrl+'User/'+id,user)
  }

}
