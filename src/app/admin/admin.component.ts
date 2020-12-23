import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {


  Product: any = {} 
  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.productSelected.subscribe(product=>this.Product = product)
  }

  post(Product: any){
    this.api.postProduct(Product);
    
  }
  
  }


  


