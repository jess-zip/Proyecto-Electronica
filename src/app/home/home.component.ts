import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  fija(){
    this.router.navigate([ '/MenuFija']);
  }
  emisor(){
    this.router.navigate([ '/MenuEmisor']);

  }
  divisor(){
    this.router.navigate([ '/MenuDivisor']);
  }
  realimentacion(){
    this.router.navigate([ '/MenuRealin']);
  }
  base(){
    this.router.navigate(['/base']);
  }

  ngOnInit(): void {
  }

}
