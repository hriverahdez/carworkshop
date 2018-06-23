import { Component, OnInit, Input } from "@angular/core";
import { Client } from "../../models/client.model";

@Component({
  selector: "cws-client-data-sheet",
  templateUrl: "./client-data-sheet.component.html",
  styleUrls: ["./client-data-sheet.component.css"]
})
export class ClientDataSheetComponent implements OnInit {
  @Input() client: Client;

  constructor() {}

  ngOnInit() {}

  get fullname() {
    return `${this.client.firstName} ${this.client.lastName}`;
  }

  get isCompany() {
    return this.client.web || this.client.position || this.client.companyName;
  }

  get displayAddressRow() {
    if (!this.client.address && !this.client.locality && !this.client.zipCode)
      return false;
    else return true;
  }

  get displayPhoneRow() {
    if (
      !this.client.homePhone &&
      !this.client.mobilePhone &&
      !this.client.otherPhone
    )
      return false;
    else return true;
  }

  get car() {
    return this.client.car || {};
  }

  get displayCarModelSpecificsRow() {
    if (!this.car.variant && !this.car.type && !this.car.version) return false;
    else return true;
  }
}
