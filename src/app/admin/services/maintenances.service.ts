import { Injectable } from "@angular/core";
import { AbstractDataService } from "../../@shared/utils/abstract-data-service";
import { Maintenance } from "../models/maintenance.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { catchError } from "rxjs/operators";

@Injectable()
export class MaintenancesService extends AbstractDataService<Maintenance> {
  constructor(public http: HttpClient) {
    super(http, "maintenances");
  }

  getByClientId(id: string | number): Observable<Maintenance[]> {
    return this.http
      .get<Maintenance[]>(`${environment.apiURL}/maintenances/${id}`)
      .pipe(catchError(error => Observable.throw(error)));
  }
}
