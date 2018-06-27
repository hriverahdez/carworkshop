import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Client } from "../models/client.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../store";
import { filter } from "rxjs/operators";

@Injectable()
export class ClientResolver implements Resolve<any> {
  constructor(private store: Store<fromStore.AdminState>) {}

  resolve(route: ActivatedRouteSnapshot) {
    console.log("ON RESOLVER:", route);
    return "Helian";
    // return this.store
    //   .select(fromStore.selectCurrentClientName)
    //   .pipe(filter(n => n !== undefined));
  }
}
