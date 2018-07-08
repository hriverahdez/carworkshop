import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// BOOTSTRAP
import {
  BsDropdownModule,
  BsDatepickerModule,
  defineLocale
} from "ngx-bootstrap";

import { esLocale } from "ngx-bootstrap/locale";
defineLocale("es", esLocale);

const NGX_BS_MODULES = [BsDropdownModule, BsDatepickerModule];

// components
import * as fromComponents from "./components";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot()
  ],

  declarations: [...fromComponents.components],
  exports: [...fromComponents.components, ...NGX_BS_MODULES]
})
export class ThemeModule {}
