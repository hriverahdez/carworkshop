import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  LayoutComponent,
  LoginComponent,
  LandingPageComponent
} from "./containers";

// guards
import * as fromGuards from "./guards";

const ROUTES: Routes = [
  {
    path: "home",
    component: LandingPageComponent,
    data: {
      breadcrumb: "Home"
    }
  },
  {
    path: "app",
    component: LayoutComponent,
    canActivate: [fromGuards.AuthGuard, fromGuards.SessionNotExpiredGuard],
    canActivateChild: [fromGuards.AuthGuard],
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
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
