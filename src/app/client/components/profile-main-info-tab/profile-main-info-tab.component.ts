import { Component, OnInit, Input } from "@angular/core";
import { Client, UserType } from "../../../admin/models/client.model";

@Component({
  selector: "cws-profile-main-info-tab",
  templateUrl: "./profile-main-info-tab.component.html",
  styleUrls: ["./profile-main-info-tab.component.css"]
})
export class ProfileMainInfoTabComponent implements OnInit {
  @Input() client: Client;

  constructor() {}

  ngOnInit() {}

  get isCompany() {
    return this.client.type === UserType.Company;
  }
}
