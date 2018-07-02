import { Component, OnInit, Input, ElementRef, ViewChild } from "@angular/core";
import { Car } from "../../../admin/models/car.model";
import { Client } from "../../../admin/models/client.model";
import { FileDownloadHelperService } from "../../../@core/services/file-download-helper.service";

@Component({
  selector: "cws-car-info-pane",
  templateUrl: "./car-info-pane.component.html",
  styleUrls: ["./car-info-pane.component.css"]
})
export class CarInfoPaneComponent implements OnInit {
  @Input() client: Client;
  @ViewChild("downloadZipLink") private downloadZipLink: ElementRef;

  constructor(private fdHelper: FileDownloadHelperService) {}

  ngOnInit() {}

  get car() {
    return this.client.car;
  }

  get fullname() {
    return `${this.client.firstName} ${this.client.lastName}`;
  }

  getReport() {
    this.fdHelper.getFile(
      `maintenancesDatasheet/${this.client.id}`,
      "Ficha mía.pdf"
    );
  }

  downloadFile(data) {
    var blob = new Blob([data], { type: "application/pdf" });
    var url = window.URL.createObjectURL(blob);

    const link = this.downloadZipLink.nativeElement;
    link.href = url;

    link.download = "Ficha mía.pdf";
    link.click();

    window.URL.revokeObjectURL(url);
  }
}
