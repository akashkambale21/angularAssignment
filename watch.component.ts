import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goBacktoparant(){
    this.router.navigate([`/product`]);
  }

}
