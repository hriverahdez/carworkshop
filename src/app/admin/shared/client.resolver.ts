import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Client } from "../models/client.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../store";

@Injectable()
export class ClientResolver implements Resolve<Client> {
  constructor(private store: Store<fromStore.ClientsState>) {}

  resolve(route: ActivatedRouteSnapshot) {
    console.log("ON RESOLVER:", route);
    // return { nombre: "Helian" };
    return this.store.select(fromStore.selectCurrentClient);
  }
}
