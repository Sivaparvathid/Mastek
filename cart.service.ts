import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:any=[]
  public mobileList=new BehaviorSubject<any>([]);
  public tabletList=new BehaviorSubject<any>([]);
  public watchList=new BehaviorSubject<any>([]);

  constructor() { }
  getProducts(){
       return this.mobileList,this.tabletList,this.watchList.asObservable();
  }
  setProducts(product:any)
  {
        this.cartItemList.push(...product);
        this.mobileList,this.tabletList,this.watchList.next(product);
  }

  addtoCart(product:any){
    this.cartItemList.push(product);
    this.mobileList,this.tabletList,this.watchList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice(): number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal +=a.price; 
    })
    return grandTotal;
  }
  removeCartItem(product:any){
       this.cartItemList.map((a:any,index:any)=>{
         if(product.id===a.id){
           this.cartItemList.splice(index,1);
         }
       })
       this.mobileList,this.tabletList,this.watchList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList=[];
    this.mobileList,this.tabletList,this.watchList.next(this.cartItemList);
  }
}
