import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./components/dashboard/dashboard.component";


const routes: Routes = [
  { path: '', redirectTo: '/ProyectoX', pathMatch: 'full' },  // Redirige a /ricardo
  { path: 'ProyectoX', component: DashboardComponent }        // Ruta para /ricardo
];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule{}