import { Component } from "@angular/core";
import { setTheme } from "ngx-bootstrap/utils";

@Component({
  selector: "app-root",
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = "app";
  constructor() {}
}
