import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  
  public arr:any;
  id:any

  constructor(private data : DataService , private activeroute : ActivatedRoute) {

    this.id = this.activeroute.snapshot.paramMap.get('_id');
    this.data.getProductDetails(this.id).subscribe((response) => {
      this.arr = response.data
    });
   }

  ngOnInit(): void {
  }

}
