import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CoreModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
