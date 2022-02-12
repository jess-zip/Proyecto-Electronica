import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fija-vccyvbb',
  templateUrl: './fija-vccyvbb.component.html',
  styleUrls: ['./fija-vccyvbb.component.css']
})
export class FijaVccyvbbComponent implements OnInit {
  RB:number;
  RBk:number;
  RC:number;
  RCk:number;
  IC:number;
  ICm:number;
  ICmicro:number;
  IB:number;
  IBm:number;
  IBmicro:number;
  IE:number;
  IEm:number;
  IEmicro:number;
  VCC:number;
  //Fuente Vbb
  VBB:number;
  VCE:number;
  ICsat:number;
  ICsatM:number;
  ICsatMicro:number;
  Beta:number;
  VRC:number;
  VRB:number;
  VB:number;
  VC:number;
  VBE=0.7;

  constructor(private router:Router) { }
  limpiar(){
    this.VCC=null;
    this.RB=null;
    this.RC=null;
    this.Beta=null;
    this.VBB=null;
  }
  regresar(){
    this.router.navigate([ '/Home']);
  }

  ngOnInit(): void {
    setInterval(()=> {
      this.IB=(this.VBB-this.VBE)/this.RB;
      this.ICsat=this.VCC/this.RC;
      this.IC=this.Beta*this.IB;
      this.VCE=this.VCC-(this.IC*this.RC);
      this.IE=this.IC+this.IB;
      this.VRB=this.RB*this.IB;
      this.VRC=this.RC*this.IC;
      this.VB=this.VCE-this.VRB;
      this.VC=this.VCE-this.VRC;
    },200);
  }

}
