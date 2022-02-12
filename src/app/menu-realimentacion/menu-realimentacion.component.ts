import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-realimentacion',
  templateUrl: './menu-realimentacion.component.html',
  styleUrls: ['./menu-realimentacion.component.css']
})
export class MenuRealimentacionComponent implements OnInit {

  constructor(private router: Router) { }
  normal(){
    this.router.navigate([ '/Realimentacion']);
  }
  serie(){
    this.router.navigate([ '/RealimentacionSerie']);

  }

  ngOnInit(): void {
  }

}
