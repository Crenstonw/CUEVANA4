import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageCarteleraComponent } from './ui/page-cartelera/page-cartelera.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PageCarteleraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
