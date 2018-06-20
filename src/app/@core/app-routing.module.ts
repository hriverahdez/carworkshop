import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent, LoginComponent } from "./containers";

const ROUTES: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "admin",
        loadChildren: "../admin/admin.module#AdminModule"
      },
      {
        path: "",
        redirectTo: "/admin",
        pathMatch: "full"    
      },
      {
        path: "**",
        redirectTo: "admin"
      }
    ]
  }
  // {
  //   path: "",
  //   redirectTo: "/",
  //   pathMatch: "full"
  // },
  // {
  //   path: "**",
  //   redirectTo: ""
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
