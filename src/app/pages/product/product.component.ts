import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import {Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  catId:any;
  subId:any;
  subCategory:any[]=[];
  //product:any[]=[];

  constructor(private data : DataService , private activeroute:ActivatedRoute , private router:Router) {
    this.subId = this.activeroute.snapshot.paramMap.get('catId');
    this.catId = this.activeroute.snapshot.paramMap.get('catId');

    this.postSubCategory();
    //this.postProduct();
   }

  ngOnInit(): void {
  }

  postSubCategory(){
    this.data.getSubCategory(this.subId).subscribe((response:any) => {
      this.subCategory = response.data
    });
  }

  // postProduct(){
  //   this.data.getProduct(this.catId).subscribe((response:any) => {
  //     this.product = response.data
  //   });
  // }

  // onclick(_id:string){
  //   this.router.navigate(['productDetail' , _id]);
  // }

}
