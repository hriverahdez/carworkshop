import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientHomeComponent, ProfileComponent } from "./containers";

const ROUTES: Routes = [
  {
    path: "",
    component: ClientHomeComponent
  },
  {
    path: "profile",
    component: ProfileComponent,
    data: {
      breadcrumb: "Perfil"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
