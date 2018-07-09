import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "cws-button-with-loader",
  templateUrl: "./button-with-loader.component.html",
  styleUrls: ["./button-with-loader.component.css"]
})
export class ButtonWithLoaderComponent implements OnInit {
  @Input() buttonLabel: string;
  @Input() buttonClass: string = "success";
  @Input() full: boolean = true;
  @Input() isLoading: boolean = false;
  @Output() clicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  sendClick() {
    this.clicked.emit();
  }
}
