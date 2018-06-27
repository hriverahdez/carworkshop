import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "cws-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.css"]
})
export class LoaderComponent implements OnInit {
  defaultMinWidth: 250;
  defaultMinHeight: 250;

  @Input() width;
  @Input() height;

  contentBoxStyles = {
    "min-width.px": 250,
    "min-height.px": 250
  };

  constructor() {}

  ngOnInit() {}
}
