import { Component, OnInit, Input } from "@angular/core";
import { Client, ClientType } from "../../../@core/models/client.model";

@Component({
  selector: "cws-profile-additional-info-tab",
  templateUrl: "./profile-additional-info-tab.component.html",
  styleUrls: ["./profile-additional-info-tab.component.css"]
})
export class ProfileAdditionalInfoTabComponent implements OnInit {
  @Input() client: Client;

  constructor() {}

  ngOnInit() {}

  get isCompany() {
    return this.client.type === ClientType.Company;
  }
}
