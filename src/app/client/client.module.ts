import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientHomeComponent } from "./containers/client-home/client-home.component";
import { ClientRoutingModule } from "./client-routing.module";

@NgModule({
  imports: [CommonModule, ClientRoutingModule],
  declarations: [ClientHomeComponent]
})
export class ClientModule {}
