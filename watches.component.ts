import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from "src/app/cart.service";



@Component({

  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.scss']

})
export class WatchesComponent implements OnInit {
  watchList: any;
  
  
constructor(private ser:ApiService,private cartService:CartService) {
}
ngOnInit(): void {

     this.ser.getAllWatchesData().subscribe((res:any)=>{
     this.watchList=res;
     this.watchList.forEach((a:any)=>{
     
    });
    })

  }
  addtoCart(w:any){
      this.cartService.addtoCart(w);
  }

   

      
}