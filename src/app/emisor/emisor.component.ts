import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-emisor',
  templateUrl: './emisor.component.html',
  styleUrls: ['./emisor.component.css']
})
export class EmisorComponent implements OnInit {

  RB:number;
RE:number;
RC:number;
IC:number;
IB:number;
IE:number;
VCC:number;
VCE:number;
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
    this.RB=null;
    this.RC=null;
    this.Beta=null;
    this.RE=null;
  }
  regresar(){
    this.router.navigate([ '/Home']);
   }
 
  ngOnInit(): void {
    
    setInterval(()=>
    {this.IB=(this.VCC-this.VBE)/(this.RB+((this.Beta+1)*this.RE));
    this.ICsat=this.VCC/(this.RC+this.RE);
    this.IC=this.Beta*this.IB;
    this.VCE=this.VCC-(this.IC*(this.RC+this.RE));
    this.IE=this.IC+this.IB;
    this.VRB=this.RB*this.IB;
    this.VRC=this.RC*this.IC;
    
    this.VC=this.VCE-this.VRC;
     
    },200);
  }
}
