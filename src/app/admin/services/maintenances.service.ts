import { Injectable } from "@angular/core";
import { AbstractDataService } from "../../@shared/utils/abstract-data-service";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from "../../../environments/environment";
import { catchError } from "rxjs/operators";
import { Maintenance } from "../../@core/models/maintenance.model";
import { MaintenanceCategory } from "../../@core/models/maintenance-category.model";

@Injectable({ providedIn: "root" })
export class MaintenancesService extends AbstractDataService<Maintenance> {
  constructor(public http: HttpClient) {
    super(http, "maintenances");
  }

  getAllCategories() {
    return this.http
      .get<MaintenanceCategory[]>(
        `${environment.apiURL}/maintenances/categories`
      )
      .pipe(catchError(error => throwError(error)));
  }

  getByClientId(id: string | number): Observable<Maintenance[]> {
    return this.http
      .get<Maintenance[]>(`${environment.apiURL}/maintenances/${id}`)
      .pipe(catchError(error => throwError(error)));
  }
}
