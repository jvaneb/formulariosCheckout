import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { Formulario1Component } from './pages/formulario1/formulario1.component';


@NgModule({
  declarations: [  
    Formulario1Component
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
