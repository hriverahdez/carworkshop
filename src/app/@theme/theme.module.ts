import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// BOOTSTRAP
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// components
import * as fromComponents from "./components";

@NgModule({
  imports: [CommonModule, FormsModule, NgbModule.forRoot()],

  declarations: [...fromComponents.components],
  exports: [...fromComponents.components, NgbModule]
})
export class ThemeModule {}
