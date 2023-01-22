import { provideCloudinaryLoader } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    cartarray:any=[];
    cartlist=new BehaviorSubject([])
  constructor() { }
  //add to cart
  addcart(product:any){
    this.cartarray.push(product);
    this.cartlist.next(this.cartarray)
    console.log(this.cartlist);

    //calling gettotal fn
    let total=this.gettotal();
    console.log(total);
    
    
  }
  //total price
  gettotal(){
    var grandsum=0
    this.cartarray.map((item:any)=>{
      grandsum+=item.price
    })
    return grandsum;
  }

  //remove item from cart
  removecart(product:any){
    this.cartarray.map((item:any,index:any)=>{
      if(product.id==item.id){
        this.cartarray.splice(index,1);
      }

    })
    this.cartlist.next(this.cartarray)//remove & update
  }
  //remove all items from cart
  removeall(){
    this.cartarray=[];
    this.cartlist.next(this.cartarray)
  }
}
