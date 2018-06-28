import { Component, OnInit, Input, OnDestroy } from "@angular/core";

@Component({
  selector: "cws-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.css"]
})
export class LoaderComponent implements OnInit, OnDestroy {
  defaultMinWidth: 250;
  defaultMinHeight: 250;

  @Input() width;
  @Input() height;

  contentBoxStyles = {
    "min-width.px": 250,
    "min-height.px": 250
  };

  constructor() {}

  ngOnInit() {
    document.getElementsByTagName("body")[0].classList.add("cws_block-scroll");
  }

  ngOnDestroy(): void {
    document
      .getElementsByTagName("body")[0]
      .classList.remove(".cws_block-scroll");
  }
}
