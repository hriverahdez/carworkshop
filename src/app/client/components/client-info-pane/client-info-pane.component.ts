import { Component, OnInit, Input } from "@angular/core";
import { Client, UserType } from "../../../admin/models/client.model";

@Component({
  selector: "cws-client-info-pane",
  templateUrl: "./client-info-pane.component.html",
  styleUrls: ["./client-info-pane.component.css"]
})
export class ClientInfoPaneComponent implements OnInit {
  @Input() client: Client;

  constructor() {}

  ngOnInit() {}

  get fullname() {
    return `${this.client.firstName} ${this.client.lastName} `;
  }

  get isCompany() {
    return this.client.type === UserType.Company;
  }
}
