import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FijaComponent } from './fija/fija.component';
import { EmisorComponent } from './emisor/emisor.component';
import { DivisorComponent } from './divisor/divisor.component';
import { RealimentacionComponent } from './realimentacion/realimentacion.component';
import { HomeComponent } from './home/home.component';
import { DivisorAproxComponent } from './divisor-aprox/divisor-aprox.component';
import { BaseComunComponent } from './base-comun/base-comun.component';
import { RealimentacionSerieComponent } from './realimentacion-serie/realimentacion-serie.component';
import { MenuRealimentacionComponent } from './menu-realimentacion/menu-realimentacion.component';
import { MenuDivisorComponent } from './menu-divisor/menu-divisor.component';
import { MenuFijaComponent } from './menu-fija/menu-fija.component';
import { FijaVccyvbbComponent } from './fija-vccyvbb/fija-vccyvbb.component';
import { MenuEmisorComponent } from './menu-emisor/menu-emisor.component';
import { EmisorVccyvbbComponent } from './emisor-vccyvbb/emisor-vccyvbb.component';

@NgModule({
  declarations: [
    AppComponent,
    FijaComponent,
    EmisorComponent,
    DivisorComponent,
    RealimentacionComponent,
    HomeComponent,
    DivisorAproxComponent,
    BaseComunComponent,
    RealimentacionSerieComponent,
    MenuRealimentacionComponent,
    MenuDivisorComponent,
    MenuFijaComponent,
    FijaVccyvbbComponent,
    MenuEmisorComponent,
    EmisorVccyvbbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
