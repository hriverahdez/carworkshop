import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Client, UserType } from "../../../admin/models/client.model";

@Component({
  selector: "cws-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  // client$: Observable<Client>
  client: Client = {
    firstName: "Helian",
    lastName: "Rivera",
    companyName: "Mi Company, INC",
    type: UserType.Company,
    email: "hrivera@gmail.com",
    registrationDate: "24-04-2018"
  };

  constructor() {}

  ngOnInit() {}
}
