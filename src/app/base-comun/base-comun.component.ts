import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-base-comun',
  templateUrl: './base-comun.component.html',
  styleUrls: ['./base-comun.component.css']
})
export class BaseComunComponent implements OnInit {
VEE:number;
  RB:number;
  RE:number;
  RC:number;
  IC:number;
  IB:number;
  IE:number;
  VCC:number;
  VCE:number;
  VE:number;
  ICsat:number;
  Beta:number;
  VRC:number;
  VRB:number;
  VB:number;
  VC:number;
  VBE=0.7;
  VCB:number;
  VRE:number;
  
    constructor(private router:Router) { }
    limpiar(){
      this.VCC=null;
      this.RE=null;
      this.RC=null;
      this.Beta=null;
      this.VEE=null;
    }
    regresar(){
      this.router.navigate([ '/Home']);
     }
   
    ngOnInit(): void {
      
      setInterval(()=>
      {
      this.IE=(this.VEE-this.VBE)/this.RE;
      this.IB=this.IE/(this.Beta+1);
      this.IC=this.Beta*this.IB;
      this.VRC=this.RC*this.IC;
     this.VRE=this.RE*this.IE;
      this.VCE=this.VEE+this.VCC-this.VRE-this.VRC;
      this.VCB=-this.VRC+this.VCC;
      
     // this.ICsat=this.VCC/(this.RC+this.RE);
     // this.VC=this.VCB+this.VRC;
     // this.VE=this.VB-this.VBE;
    
       
      },200);
    }
  }
  