import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { ThemeModule } from "../@theme/theme.module";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components";

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, ThemeModule],
  declarations: [...fromContainers.containers, ...fromComponents.components]
})
export class DashboardModule {}
