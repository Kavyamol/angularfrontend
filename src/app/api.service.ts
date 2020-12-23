import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject } from 'rxjs';

@Injectable()


export class ApiService {
  public selectedProduct = new Subject<any>();
  productSelected = this.selectedProduct.asObservable();


    constructor(public http: HttpClient){

    }

    getProduct(){
       return this.http.get('http://localhost:62938/products/products');
    }

    postProduct(product: any){
        this.http.post('http://localhost:62938/products/products',product).subscribe(res => {
            console.log(res);
        })

    }
    putProduct(product: any){
        this.http.put(`http://localhost:62938/products/products/${product.id}`,product).subscribe(res => {
            console.log(res);
        });
        
    
    }
  selectProduct(product: any) {
            
    this.selectedProduct.next(product);
  }
    
    deleteProduct(product: any){
      this.http.delete(`http://localhost:62938/products/products/${product.id}`,product).subscribe(res => {
          console.log(res);
      });
    
    
    }
    


}