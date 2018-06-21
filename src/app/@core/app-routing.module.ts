import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent, LoginComponent } from "./containers";
import { AuthGuard } from "./guards/auth.guard";

const ROUTES: Routes = [
  {
    path: "login",
    component: LoginComponent,
    data: {
      breadcrumb: "login"
    }
  },
  {
    path: "app",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "admin",
        loadChildren: "../admin/admin.module#AdminModule",
        data: {
          breadcrumb: "Dashboard"
        }
      },
      {
        path: "",
        redirectTo: "/app/admin",
        pathMatch: "full"
      },
      {
        path: "**",
        redirectTo: "/app/admin"
      }
    ],
    data: {
      breadcrumb: ""
    }
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
