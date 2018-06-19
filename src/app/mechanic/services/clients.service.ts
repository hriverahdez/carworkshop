import { Injectable } from "@angular/core";
import { AbstractDataService } from "../../@shared/utils/abstract-data-service";
import { Client } from "../models/client.model";
import { HttpClient } from "@angular/common/http";
// import { MechanicModule } from "../mechanic.module";

@Injectable({
  providedIn: "root"
  // providedIn: MechanicModule
})
export class ClientsService extends AbstractDataService<Client> {
  constructor(public http: HttpClient) {
    super(http, "cliente");
  }
}
