import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { filter } from 'minimatch';
import { AlertifyService } from '../services/alertify.service'
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

//declare let alertify:any; /*3. parti komponentleri tanıtma */

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers :[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute) { }
  title = "Ürün listesi";
  filterText = "";
  
  products: Product[] ;
  /**component ilk kez açıldığı zaman açılır */
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
        this.products=data;
      })
    })
    
  }

  addToCart(product) {
    this.alertifyService.warning(product.name + " " + "added.")
  }

}
