import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "cws-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.css"]
})
export class LoaderComponent implements OnInit, OnChanges {
  @Input("show") isShown = false;
  display = "none";

  constructor() {}

  ngOnInit() {}

  ngOnChanges(): void {
    this.display = this.isShown ? "flex" : "none";
    if (this.isShown) {
      document
        .getElementsByTagName("body")[0]
        .classList.add("cws_block-scroll");
    } else {
      document
        .getElementsByTagName("body")[0]
        .classList.remove("cws_block-scroll");
    }
  }
}
