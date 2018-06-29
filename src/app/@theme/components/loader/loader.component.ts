import { Component, OnInit, Input, OnDestroy, OnChanges } from "@angular/core";

@Component({
  selector: "cws-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.css"]
})
export class LoaderComponent implements OnInit, OnChanges {
  defaultMinWidth: 250;
  defaultMinHeight: 250;

  @Input("show") isShown = false;
  display = "none";

  contentBoxStyles = {
    "min-width.px": 250,
    "min-height.px": 250
  };

  constructor() {}

  ngOnInit() {
    // document.getElementsByTagName("body")[0].classList.add("cws_block-scroll");
  }

  ngOnChanges(): void {
    console.log("HERE:", this.isShown);
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
