import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MechanicRoutingModule } from "./mechanic-routing.module";

import { StoreModule } from "@ngrx/store";
import { reducers, effects } from "./store";
import { EffectsModule } from "@ngrx/effects";

import { SharedModule } from "../@shared/shared.module";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components";

@NgModule({
  imports: [
    CommonModule,
    MechanicRoutingModule,
    SharedModule,

    StoreModule.forFeature("clients", reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  providers: []
})
export class MechanicModule {}
