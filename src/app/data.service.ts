import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import {ActivatedRoute} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  Base_URL = "http://apolis-grocery.herokuapp.com/api";

  constructor(private http : HttpClient , ) { }

  getCategory() : Observable<any>{
    return this.http.get<any>(`${this.Base_URL}/category`);
  }

  getSubCategory(catId:number):Observable<any>{
    return this.http.get<any>(`${this.Base_URL}/subcategory/${catId}`);
  }

  getProduct(catId:number):Observable<any>{
    return this.http.get<any>(`${this.Base_URL}/products/cat/${catId}`);
  }

  getProductDetails(Id:any):Observable<any>{
    return this.http.get<any>(`${this.Base_URL}/products/${Id}`);
  }

  getProductSubcategory(id:any):Observable<any>{
    return this.http.get<any>(`${this.Base_URL}/products/sub/${id}`);
  }
  // getProductDetails(Id:any):Observable<details[]>{
  //   return this.http.get<details[]>(`${this.Base_URL}/products/${Id}`);
  // }
}
