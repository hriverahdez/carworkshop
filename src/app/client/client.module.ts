import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientRoutingModule } from "./client-routing.module";

import { ThemeModule } from "../@theme/theme.module";

import { ClientsService, MaintenancesHelperService } from "../admin/services";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers, effects } from "./store";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components";
import { ClientProfileFormComponent } from "./components/client-profile-form/client-profile-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClientRoutingModule,
    ThemeModule,
    StoreModule.forFeature("clientState", reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components,
    ClientProfileFormComponent
  ],
  exports: [...fromComponents.components],
  providers: [ClientsService, MaintenancesHelperService]
})
export class ClientModule {}
