import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-fija',
  templateUrl: './menu-fija.component.html',
  styleUrls: ['./menu-fija.component.css']
})
export class MenuFijaComponent implements OnInit {

  constructor(private router: Router) { }
  vccyvbb(){
    this.router.navigate([ '/FijaVccVbb']);
  }
  fija(){
    this.router.navigate([ '/Fija']);

  }

  ngOnInit(): void {
  }

}
