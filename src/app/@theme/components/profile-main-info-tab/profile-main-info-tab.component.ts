import { Component, OnInit, Input } from "@angular/core";
import { Client, ClientType } from "../../../@core/models/client.model";

@Component({
  selector: "cws-profile-main-info-tab",
  templateUrl: "./profile-main-info-tab.component.html",
  styleUrls: ["./profile-main-info-tab.component.css"]
})
export class ProfileMainInfoTabComponent implements OnInit {
  @Input() client: Client;
  @Input() userIsAdmin: boolean = false;

  constructor() {}

  ngOnInit() {}

  get fullname() {
    return `${this.client.firstName} ${this.client.lastName}`;
  }

  get isCompany() {
    return this.client.type === ClientType.Company;
  }
}
