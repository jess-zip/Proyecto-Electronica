import { EmisorVccyvbbComponent } from './emisor-vccyvbb/emisor-vccyvbb.component';
import { MenuEmisorComponent } from './menu-emisor/menu-emisor.component';
import { FijaVccyvbbComponent } from './fija-vccyvbb/fija-vccyvbb.component';
import { MenuFijaComponent } from './menu-fija/menu-fija.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FijaComponent} from '../app/fija/fija.component';
import {EmisorComponent} from '../app/emisor/emisor.component';
import { MenuDivisorComponent } from './menu-divisor/menu-divisor.component';
import {DivisorComponent} from '../app/divisor/divisor.component';
import { DivisorAproxComponent } from './divisor-aprox/divisor-aprox.component';
import { MenuRealimentacionComponent } from './menu-realimentacion/menu-realimentacion.component';
import {RealimentacionComponent} from '../app/realimentacion/realimentacion.component';
import { RealimentacionSerieComponent } from './realimentacion-serie/realimentacion-serie.component';
import {HomeComponent} from '../app/home/home.component';
import {BaseComunComponent} from '../app/base-comun/base-comun.component';
import { from } from 'rxjs';



const routes: Routes = [ 
  {path:'Home', component: HomeComponent},
  {path:'Fija', component: FijaComponent},
  {path:'FijaVccVbb', component: FijaVccyvbbComponent},
  {path:'EmisorVccVbb', component: EmisorVccyvbbComponent},
  {path:'Emisor', component: EmisorComponent},
  {path:'MenuDivisor', component: MenuDivisorComponent},
  {path:'MenuFija', component: MenuFijaComponent},
  {path:'MenuEmisor', component: MenuEmisorComponent},
  {path:'Divisor', component: DivisorComponent},
  {path:'DivisorAprox', component: DivisorAproxComponent},
  {path:'MenuRealin', component: MenuRealimentacionComponent},
  {path:'Realimentacion', component: RealimentacionComponent},
  {path:'RealimentacionSerie', component: RealimentacionSerieComponent},
  {path:'base', component: BaseComunComponent},
  {path:'', pathMatch:'full',redirectTo:'Home'},
  {path:'**', pathMatch:'full',redirectTo:'Homenng'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
