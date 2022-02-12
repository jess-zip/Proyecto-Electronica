import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-realimentacion',
  templateUrl: './realimentacion.component.html',
  styleUrls: ['./realimentacion.component.css']
})
export class RealimentacionComponent implements OnInit {
 
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
  VRE:number;
  
    constructor(private router:Router) { }
    limpiar(){
      this.VCC=null;
      this.RB=null;
      this.RC=null;
      this.RE=null;
      this.Beta=null;
    }
    regresar(){
      this.router.navigate([ '/Home']);
     }
   
    ngOnInit(): void {
      
      setInterval(()=>
      {
      this.IB=(this.VCC-this.VBE)/(this.RB+((this.Beta+1)*(this.RE+this.RC)));
      this.ICsat=this.VCC/(this.RC+this.RE);
      this.IC=this.Beta*this.IB;
      this.VCE=this.VCC-(this.IC*(this.RC+this.RE));
      this.IE=this.IC+this.IB;
      this.VRC=this.RC*this.IC;
      this.VRE=this.RE*this.IE;
      this.VC=this.VCE-this.VRC;
      this.VE=this.VB-this.VBE;
      this.VRB=this.RB*this.IB;
       
      },200);
    }
  }
  