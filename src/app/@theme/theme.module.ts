import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

// BOOTSTRAP
import {
  BsDropdownModule,
  BsDatepickerModule,
  defineLocale,
  BsLocaleService,
  PaginationModule
} from "ngx-bootstrap";

import { esLocale } from "ngx-bootstrap/locale";
defineLocale("es", esLocale);

const NGX_BS_MODULES = [BsDropdownModule, BsDatepickerModule, PaginationModule];

// components
import * as fromComponents from "./components";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot()
  ],

  declarations: [...fromComponents.components],
  exports: [...fromComponents.components, ...NGX_BS_MODULES, FormsModule]
})
export class ThemeModule {
  /** Setting NGX-BOOTSTRAP's Locale to Spanish to
   *  display components such as datepicker in that language
   */
  constructor(private localeService: BsLocaleService) {
    this.localeService.use("es");
  }
}
