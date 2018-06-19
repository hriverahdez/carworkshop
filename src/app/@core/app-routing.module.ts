import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const ROUTES: Routes = [
  {
    path: "mechanic",
    loadChildren: "../mechanic/mechanic.module#MechanicModule"
  },
  {
    path: "",
    redirectTo: "/mechanic",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "mechanic"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
