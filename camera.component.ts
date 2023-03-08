import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goBacktoparant(){
    this.router.navigate([`/product`]);
  }


}
