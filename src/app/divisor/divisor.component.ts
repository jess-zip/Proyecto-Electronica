import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-divisor',
  templateUrl: './divisor.component.html',
  styleUrls: ['./divisor.component.css']
})
export class DivisorComponent implements OnInit {
R1:number;
R2:number;
ETH:number;
RTH:number;
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

  constructor(private router:Router) { }
  limpiar(){
    this.VCC=null;
    this.R1=null;
    this.R2=null;
    this.RC=null;
    this.RE=null;
    this.Beta=null;
  }
  regresar(){
    this.router.navigate([ '/Home']);
   }
 
  ngOnInit(): void {
    
    setInterval(()=>
    {this.RTH=(this.R1*this.R2)/(this.R1+this.R2);
      this.ETH=(this.R2*this.VCC)/(this.R1+this.R2);
      this.IB=(this.ETH-this.VBE)/(this.RTH+((this.Beta+1)*this.RE));
    this.ICsat=this.VCC/(this.RC+this.RE);
    this.IC=this.Beta*this.IB;
    this.VCE=this.VCC-(this.IC*(this.RC+this.RE));
    this.IE=this.IC+this.IB;
    this.VRC=this.RC*this.IC;
    this.VB=(this.R2*this.VCC)/(this.R1+this.R2);
    this.VC=this.VCE-this.VRC;
    this.VE=this.VB-this.VBE;
     
    },200);
  }
}
