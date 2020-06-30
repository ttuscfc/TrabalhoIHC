import { AdminComponent } from './components/admin/admin.component';
import { ClientePageComponent } from './components/cliente-page/cliente-page.component';
import { FinalizarComponent } from './components/finalizar/finalizar.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "finalizar", component: FinalizarComponent },
  { path: "historicoPedidos", component: ClientePageComponent },
  { path: "admin", component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
