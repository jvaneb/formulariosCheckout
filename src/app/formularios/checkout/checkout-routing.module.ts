import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Formulario1Component } from './pages/formulario1/formulario1.component';

const routes: Routes = [
  {
    path: '',
    component: Formulario1Component
  },
  {
    path: 'form1',
    component: Formulario1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
