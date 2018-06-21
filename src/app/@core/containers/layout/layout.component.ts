import { Component, OnInit } from "@angular/core";
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  ActivatedRouteSnapshot
} from "@angular/router";
import { filter, distinctUntilChanged, map } from "rxjs/operators";
import { BreadCrumb } from "../../models/breadcrumb.model";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";

@Component({
  selector: "cws-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"]
})
export class LayoutComponent implements OnInit {
  breadcrumbs$: Observable<BreadCrumb[]>;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.breadcrumbs$ = this.store.select(fromStore.selectBreadcrumbs);
  }
}
