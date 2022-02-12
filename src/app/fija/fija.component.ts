import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-fija',
  templateUrl: './fija.component.html',
  styleUrls: ['./fija.component.css']
})
export class FijaComponent implements OnInit {
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
  }
 regresar(){
  this.router.navigate([ '/Home']);
 }
  ngOnInit(): void {
    
    setInterval(()=>
    {this.IB=(this.VCC-this.VBE)/this.RB;
    //this.IBm=this.IB*1000;
    //this.IBmicro=this.IBm*1000;
    this.ICsat=this.VCC/this.RC;
    //this.ICsatM=this.ICsat*1000;
    //this.ICsatMicro=this.ICsatM*1000;
    this.IC=this.Beta*this.IB;
    //his.ICm=this.IC*1000;
    //this.ICmicro=this.ICm*1000;
    this.VCE=this.VCC-(this.IC*this.RC);
    this.IE=this.IC+this.IB;
    //this.IEm=this.IC*1000;
    //this.IEmicro=this.ICm*1000;
    this.VRB=this.RB*this.IB;
    this.VRC=this.RC*this.IC;
    this.VB=this.VCE-this.VRB;
    this.VC=this.VCE-this.VRC;
    //this.RBk=this.RB/1000;
    //this.RCk=this.RC/1000;
    },200);
  }

}
