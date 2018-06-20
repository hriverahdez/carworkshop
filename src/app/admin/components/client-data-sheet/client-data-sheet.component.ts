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
    return `${this.client.nombre} ${this.client.apellidos}`;
  }

  get isCompany() {
    return this.client.web || this.client.cargo || this.client.nombre_comercial;
  }

  get displayAddressRow() {
    if (
      !this.client.direccion &&
      !this.client.localidad &&
      !this.client.codigo_postal
    )
      return false;
    else return true;
  }

  get displayPhoneRow() {
    if (
      !this.client.telef_casa &&
      !this.client.telef_movil &&
      !this.client.telef_otro
    )
      return false;
    else return true;
  }

  get car() {
    return this.client.carro || {};
  }

  get displayCarModelSpecificsRow() {
    if (!this.car.variante && !this.car.tipo && !this.car.version) return false;
    else return true;
  }
}
