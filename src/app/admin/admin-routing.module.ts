import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {
  ClientListComponent,
  ClientDetailsComponent,
  ClientItemComponent,
  DashboardComponent
} from "./containers";

import { ClientExistsGuard } from "./guards";

// const ROUTES: Routes = [
//   {
//     path: "",
//     component: DashboardComponent
//   },
//   {
//     path: "clients",
//     data: {
//       breadcrumb: "Clientes"
//     },
//     children: [
//       {
//         path: "",
//         component: ClientListComponent
//       },
//       {
//         path: "details/:clientId",
//         component: ClientDetailsComponent,
//         canActivate: [ClientExistsGuard],
//         data: {
//           breadcrumb: "Detalles"
//         }
//       }
//     ]
//   },
//   {
//     path: "client",
//     component: ClientItemComponent,
//     data: {
//       breadcrumb: "Agregar Cliente"
//     }
//   },
//   {
//     path: "client/:clientId",
//     component: ClientItemComponent,
//     data: {
//       breadcrumb: "Editar Cliente"
//     }
//   }
// ];

const ROUTES: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ClientListComponent
      },
      {
        path: "details/:clientId",
        component: ClientDetailsComponent,
        canActivate: [ClientExistsGuard],
        data: {
          breadcrumb: "Detalles"
        }
      }
    ]
  },
  {
    path: "client",
    component: ClientItemComponent,
    data: {
      breadcrumb: "Agregar Cliente"
    }
  },
  {
    path: "client/:clientId",
    component: ClientItemComponent,
    data: {
      breadcrumb: "Editar Cliente"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
