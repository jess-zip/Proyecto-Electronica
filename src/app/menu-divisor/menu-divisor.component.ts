import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-divisor',
  templateUrl: './menu-divisor.component.html',
  styleUrls: ['./menu-divisor.component.css']
})
export class MenuDivisorComponent implements OnInit {

  constructor(private router: Router) { }
  exacto(){
    this.router.navigate([ '/Divisor']);
  }
  aprox(){
    this.router.navigate([ '/DivisorAprox']);

  }

  ngOnInit(): void {
  }

}
