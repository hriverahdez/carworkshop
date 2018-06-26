import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { BreadCrumb } from "../../models/breadcrumb.model";
import { AuthUser } from "../../../@shared/models/auth-user.model";

@Component({
  selector: "cws-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean = true;

  @Input() currentUser: AuthUser;
  @Input() breadcrumbs: BreadCrumb[];
  @Output() onLogout = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  get isClient() {
    return this.currentUser.role.name === "client";
  }

  logout() {
    this.onLogout.emit();
  }
}
