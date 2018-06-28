import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientRoutingModule } from "./client-routing.module";

import { ThemeModule } from "../@theme/theme.module";

import { ClientsService } from "../admin/services";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers, effects } from "./store";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components";

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    ThemeModule,
    StoreModule.forFeature("client", reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromComponents.components],
  providers: [ClientsService]
})
export class ClientModule {}
