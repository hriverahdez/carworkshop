import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cws-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  get currentYear() {
    const today = Date.now();
    return new Date(today).getFullYear();
  }
}
