import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "taches", loadChildren: () => import("./modules/taches/taches.module").then(m => m.TachesModule) },
  { path: "", redirectTo: "taches", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
