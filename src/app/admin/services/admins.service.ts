import { Injectable } from "@angular/core";
import { AbstractDataService } from "../../@shared/utils/abstract-data-service";
import { AuthUser } from "../../@shared/models/auth-user.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AdminsService extends AbstractDataService<AuthUser> {
  constructor(public http: HttpClient) {
    super(http, "user");
  }
}
