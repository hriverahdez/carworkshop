// ANGULAR
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

// CONFIG
import { environment } from "../../environments/environment";

// BOOTSTRAP
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// STORE
import { reducers, effects, CustomSerializer } from "./store";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

// APP RELATED
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppInterceptor } from "../@shared/utils/interceptor/token.interceptor";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components";

// guards
import * as fromGuards from "./guards";

@NgModule({
  declarations: [
    AppComponent,
    ...fromContainers.containers,
    ...fromComponents.components
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    NgbModule.forRoot(),

    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    ...fromGuards.guards,
    AppInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
