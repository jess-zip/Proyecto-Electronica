import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-realimentacion-serie',
  templateUrl: './realimentacion-serie.component.html',
  styleUrls: ['./realimentacion-serie.component.css']
})
export class RealimentacionSerieComponent implements OnInit {

  RB:number;
  R1:number;
  R2:number;
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
      this.R1=null;
      this.R2=null;
      this.RE=null;
      this.RC=null;
      this.Beta=null;
    }
    regresar(){
      this.router.navigate([ '/Home']);
     }
   
    ngOnInit(): void {
      
      setInterval(()=>{
        this.RB=this.R1+this.R2;
        this.IB=(this.VCC-this.VBE)/(this.RB+this.Beta*(this.RC+this.RE));
        this.ICsat=this.VCC/(this.RC+this.RE);
        this.IC=this.Beta*this.IB;
        this.IE=(this.Beta+1)*this.IB;
        this.VCE=this.VCC-this.IC*(this.RC+this.RE);
        this.VRB=this.IB*this.RB;
        this.VRC=this.IC*this.RC;
        this.VRE=this.IE*this.RE;
        this.VB=this.VBE+this.VRE;
        this.VE=this.VRE;
        this.VC=this.VCC-this.VRC;       
      },200);
    }

}
