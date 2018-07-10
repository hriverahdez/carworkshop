import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { AdminRoutingModule } from "./admin-routing.module";
import { SharedModule } from "../@shared/shared.module";
import { ThemeModule } from "../@theme/theme.module";

import { StoreModule } from "@ngrx/store";
import { reducers, effects } from "./store";
import { EffectsModule } from "@ngrx/effects";

import { AppInterceptor } from "../@shared/utils/interceptor/token.interceptor";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components";

// services
import * as fromServices from "./services";

// guards
import * as fromGuards from "./guards";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    ThemeModule,

    StoreModule.forFeature("adminState", reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  providers: [...fromServices.services, ...fromGuards.guards],
  entryComponents: [fromContainers.MaintenanceItemComponent]
})
export class AdminModule {}
