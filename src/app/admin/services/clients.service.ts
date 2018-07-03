import { Injectable } from "@angular/core";
import { AbstractDataService } from "../../@shared/utils/abstract-data-service";
import { Client } from "../models/client.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ClientsService extends AbstractDataService<Client> {
  constructor(public http: HttpClient) {
    super(http, "clients");
  }

  updateClientProfile(client: Client) {
    return this.http
      .post<Client>(
        `${environment.apiURL}/updateClientProfile/${client.id}`,
        client
      )
      .pipe(catchError(error => Observable.throw(error)));
  }
}
