import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "cws-page-size-selector",
  templateUrl: "./page-size-selector.component.html",
  styleUrls: ["./page-size-selector.component.css"]
})
export class PageSizeSelectorComponent implements OnInit {
  availablePageSizes = [5, 15, 25];

  @Input() defaultSize = 5;
  @Input() elementsName: string = "Elementos";
  @Output() sizeChanged = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
    if (
      this.availablePageSizes.indexOf(this.defaultSize) === -1 &&
      this.defaultSize
    ) {
      this.availablePageSizes = [
        ...this.availablePageSizes,
        +this.defaultSize
      ].sort(this.asc);
    }
  }

  onSizeChange(size) {
    this.sizeChanged.emit(+size);
  }

  asc(n1, n2) {
    if (n1 === n2) return 0;
    return n1 > n2 ? 1 : -1;
  }
}
