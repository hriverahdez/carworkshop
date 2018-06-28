import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cws-loading-box",
  //   templateUrl: './loading-box.component.html',
  template: `
    <div class="loader-box" [ngStyle]="contentBoxStyles">
        <div id="pb_loader" class="show"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#2c3e50"/></svg></div>
    </div>
    `,
  styleUrls: ["./loading-box.component.css"]
})
export class LoadingBoxComponent implements OnInit {
  contentBoxStyles = {
    "min-width.px": 250,
    "min-height.px": 250
  };

  constructor() {}

  ngOnInit() {}
}
