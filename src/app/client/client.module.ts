import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

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

// guards
import * as fromGuards from "./guards";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClientRoutingModule,
    ThemeModule,
    StoreModule.forFeature("clientState", reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  providers: [ClientsService, ...fromGuards.guards]
})
export class ClientModule {}
