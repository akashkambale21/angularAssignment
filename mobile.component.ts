import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goBacktoparant(){
    this.router.navigate([`/product`]);
  }


}
