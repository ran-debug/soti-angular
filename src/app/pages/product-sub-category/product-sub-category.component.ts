import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router ,ActivatedRoute } from '@angular/router';
import { ProductdetailComponent } from '../productdetail/productdetail.component';

@Component({
  selector: 'app-product-sub-category',
  templateUrl: './product-sub-category.component.html',
  styleUrls: ['./product-sub-category.component.css']
})
export class ProductSubCategoryComponent implements OnInit {

  subId:any;
  productSub:any[]=[];

  constructor(private data:DataService , private activeroute : ActivatedRoute,private router:Router) {
    this.subId = this.activeroute.snapshot.paramMap.get('subId');
    this.data.getProductSubcategory(this.subId).subscribe((response:any)=>{
      this.productSub = response.data;
    })
   }

  ngOnInit(): void {
  }
  onclik(_id:string){
    this.router.navigate(['productDetail' , _id]);
  }
}
