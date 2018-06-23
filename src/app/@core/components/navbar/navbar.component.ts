import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { BreadCrumb } from "../../models/breadcrumb.model";
import { AuthUser } from "../../../@shared/models/auth-user.model";

@Component({
  selector: "cws-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @Input() currentUser: AuthUser;
  @Input() breadcrumbs: BreadCrumb[];
  @Output() onLogout = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  logout() {
    this.onLogout.emit();
  }
}
