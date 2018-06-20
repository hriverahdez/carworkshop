import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { environment } from "../../environments/environment";

import { reducers, effects, CustomSerializer } from "./store";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";

// containers
import * as fromContainers from "./containers";

@NgModule({
  declarations: [AppComponent, ...fromContainers.containers],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {}
