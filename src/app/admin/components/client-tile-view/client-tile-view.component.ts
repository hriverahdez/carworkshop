import { Component, OnInit, Input } from "@angular/core";
import { Client, ClientType } from "../../models/client.model";

@Component({
  selector: "cws-client-tile-view",
  templateUrl: "./client-tile-view.component.html",
  styleUrls: ["./client-tile-view.component.css"]
})
export class ClientTileViewComponent implements OnInit {
  @Input() active: boolean;
  @Input() clients: Client[];

  constructor() {}

  ngOnInit() {}

  isCompany(client: Client) {
    return client.type === ClientType.Company;
  }

  fullname(client: Client) {
    return `${client.firstName} ${client.lastName}`;
  }
}
