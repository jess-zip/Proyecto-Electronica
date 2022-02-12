import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-divisor-aprox',
  templateUrl: './divisor-aprox.component.html',
  styleUrls: ['./divisor-aprox.component.css']
})
export class DivisorAproxComponent implements OnInit {
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
  VRE:number;
  band=true;
  
    constructor(private router:Router) { }
    limpiar(){
      this.VCC=null;
      this.R1=null;
      this.RC=null;
      this.RE=null;
      this.R2=null;
      this.Beta=null;
    }
    regresar(){
      this.router.navigate([ '/Home']);
     }
   
    ngOnInit(): void {
      
      setInterval(()=>{
        if((this.Beta!=null)&&(this.RE!=null)&&(this.R2!=null)){
          if((this.Beta*this.RE)>=(10*this.R2)){
            this.band=true;
            this.VB=(this.R2*this.VCC)/(this.R1+this.R2);
            this.VE=this.VB-this.VBE;
            this.IE=this.VE/this.RE;
            this.IB=this.IE/(this.Beta+1);
            this.IC=this.IE;//son muy cernaos asi que esto funciona 
            this.VCE=this.VCC-this.IC*(this.RC+this.RE);
            this.RB=this.VB/this.IB;
            this.VRB=this.IB*this.RB;
            this.VRC=this.IC*this.RC;
            this.VRE=this.IE*this.RE;
            this.VC=this.VCC-this.VRC;
  
            this.ICsat=this.VCC/(this.RC+this.RE);//no se si es la correcta
          }
          else{
            this.band=false;
          }
        }
      },200);
    }
  
}
