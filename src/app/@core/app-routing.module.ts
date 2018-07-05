import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import {
  LayoutComponent,
  LoginComponent,
  LandingPageComponent,
  PasswordRecoveryComponent
} from "./containers";

// guards
import * as fromGuards from "./guards";

const ROUTES: Routes = [
  {
    path: "home",
    component: LoginComponent,
    canActivate: [fromGuards.SessionNotExpiredGuard],
    data: {
      breadcrumb: "Login"
    }
  },
  //   {
  //     path: "home",
  //     component: LandingPageComponent,
  //     canActivate: [fromGuards.SessionNotExpiredGuard],
  //     data: {
  //       breadcrumb: "Home"
  //     }
  //   },
  {
    path: "password/recovery",
    component: PasswordRecoveryComponent,
    data: { breadcrumb: "Recuperar contrasena" }
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
        canActivate: [fromGuards.AdminGuard],
        canActivateChild: [fromGuards.AdminGuard],
        data: {
          //   breadcrumb: "Dashboard"
          breadcrumb: "Clientes"
        }
      },
      {
        path: "client",
        loadChildren: "../client/client.module#ClientModule",
        data: {
          breadcrumb: "Inicio"
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
    redirectTo: "/app/admin",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/app/admin"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      enableTracing: false,
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
