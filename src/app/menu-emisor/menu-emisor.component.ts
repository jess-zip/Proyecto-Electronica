import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-emisor',
  templateUrl: './menu-emisor.component.html',
  styleUrls: ['./menu-emisor.component.css']
})
export class MenuEmisorComponent implements OnInit {

  constructor(private router: Router) { }
  emisorvccyvbb(){
    this.router.navigate([ '/EmisorVccVbb']);
  }
  emisor(){
    this.router.navigate([ '/Emisor']);

  }
  ngOnInit(): void {
  }

}
