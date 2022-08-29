import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  category: any[] = [];

  constructor(private data: DataService, private route: Router) {
    this.data.getCategory().subscribe((response: any) => {
      this.category = response.data
    })
  }


  ngOnInit(): void {
  }
  gotocategory(ele: any) {

    // this.route.navigateByUrl(`/product/` + ele.catId);

    this.route.navigate(['product', ele.catId]);
  }
}
