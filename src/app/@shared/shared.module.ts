import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatDialogModule, MatSnackBarModule } from "@angular/material";

const NG_MAT_MODULES = [MatDialogModule, MatSnackBarModule];

// components
import * as fromComponents from "./components";

// services
import * as fromServices from "./services";

@NgModule({
  imports: [...NG_MAT_MODULES, CommonModule],
  providers: [...fromServices.services],
  exports: [...NG_MAT_MODULES, ...fromComponents.components],
  declarations: [...fromComponents.components],
  entryComponents: [fromComponents.ConfirmDialogComponent]
})
export class SharedModule {}
