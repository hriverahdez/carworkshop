import { Injectable } from "@angular/core";
import { AbstractDataService } from "../../@shared/utils/abstract-data-service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Client } from "../../@core/models/client.model";

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
      .pipe(catchError(error => throwError(error)));
  }
}
