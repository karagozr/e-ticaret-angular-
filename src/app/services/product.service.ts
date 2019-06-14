import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class ProductService {

  constructor(private http: HttpClient) { }

  path = "http://localhost:3000/products";

  getProducts(categoryId): Observable<Product[]> {
    let newPath = categoryId ? this.path + "?categoryId=" + categoryId : this.path
    /**subscribe datayı isteme */
    console.log(this.path);
    return this.http.get<Product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)

    );//observible dönenen data
  }

  addProduct(product: Product): Observable<Product> {
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization' :'Token'
      })
    }
    return this.http.post<Product>(this.path, product,httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );//observible dönenen data
  }

  /**hata varsa bura çalışır */
  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu :" + err.error.message;
    } else {
      errorMessage = "Sistemsel bir hata"
    }
    return throwError(errorMessage);
  }
}
