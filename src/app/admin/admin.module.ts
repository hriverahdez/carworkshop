import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { AdminRoutingModule } from "./admin-routing.module";

import { StoreModule } from "@ngrx/store";
import { reducers, effects } from "./store";
import { EffectsModule } from "@ngrx/effects";

import { AppInterceptor } from "../@shared/utils/interceptor/token.interceptor";
import { SharedModule } from "../@shared/shared.module";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components";

// services
import * as fromServices from "./services";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    SharedModule,

    StoreModule.forFeature("clients", reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  providers: [...fromServices.services]
})
export class AdminModule {}
