import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import {
  LayoutComponent,
  LoginComponent,
  LandingPageComponent,
  PasswordRecoveryComponent,
  PasswordResetComponent
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
  {
    path: "password",
    children: [
      {
        path: "recovery",
        component: PasswordRecoveryComponent,
        data: { breadcrumb: "Recuperar contrasena" }
      },
      {
        path: "reset/:token",
        component: PasswordResetComponent,
        data: { breadcrumb: "Restablecer contrasena" }
      }
    ]
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
          breadcrumb: "Clientes"
        }
      },
      {
        path: "client",
        loadChildren: "../client/client.module#ClientModule",
        canActivate: [fromGuards.ClientGuard],
        canActivateChild: [fromGuards.ClientGuard]
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
