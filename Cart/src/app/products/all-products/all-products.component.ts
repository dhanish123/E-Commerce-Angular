import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  searchterm:string=';'

  allproducts:any=[];// array data holding all products
allProducts: any;
  constructor(private api:ApiService,private cart:CartService) { }

  ngOnInit(): void {
this.api.getAllProducts().subscribe(
  (data:any)=>{
    this.allproducts=data.Products
  }
 )
 this.api.searchkey.subscribe(
  (data:any)=>{
    this.searchterm=data
  }
 )
  }
  addtowishlist(product:any){
    this.api.addtowishlist(product).subscribe(
      (result:any)=>{
        //server to client
        alert(result.message)//product added successfully
      },
      (result:any)=>{
        alert(result.error.message)//already exist
      },
    )

  }

  addcart(product:any){
    this.cart.addcart(product)
  }

}
