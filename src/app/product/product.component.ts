import { Component,OnInit} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
 
  
})
export class ProductComponent  {
  Product: any = {}
  product:any


  constructor(public api: ApiService) {
    this.api.getProduct().subscribe((res: any) => { 
      this.product = res
  })
   }

  /*ngOnInit(): void {
    
  }*/
  post(product: any){

    this.api.postProduct(product);
}

}
