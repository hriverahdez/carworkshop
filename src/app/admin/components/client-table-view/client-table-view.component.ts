import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Client, ClientType } from "../../models/client.model";

@Component({
  selector: "cws-client-table-view",
  templateUrl: "./client-table-view.component.html",
  styleUrls: ["./client-table-view.component.css"]
})
export class ClientTableViewComponent implements OnInit {
  @Input() active: boolean;
  @Input() clients: Client[];
  @Output() onCheckClient = new EventEmitter<Client>();
  @Output() onDeleteRequest = new EventEmitter<Client>();

  constructor() {}

  ngOnInit() {}

  isCompany(client: Client) {
    return client.type === ClientType.Company;
  }

  fullname(client: Client) {
    return `${client.firstName} ${client.lastName}`;
  }

  requestDelete(client: Client) {
    this.onDeleteRequest.emit(client);
  }

  checkClient(client) {
    this.onCheckClient.emit(client);
  }
}
