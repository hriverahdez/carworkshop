import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { map } from "rxjs/operators";
import { saveAs } from "file-saver/FileSaver";

@Injectable({
  providedIn: "root"
})
export class FileDownloadHelperService {
  constructor(private http: HttpClient) {}

  getFile(endpoint: string, filename: string) {
    return this.http
      .get<Blob>(`${environment.apiURL}/${endpoint}`, {
        responseType: "blob" as "json"
      })
      .subscribe(data => {
        var blob = new Blob([data], { type: "application/pdf" });
        //   var url = window.URL.createObjectURL(blob);

        //   const link = targetEl.nativeElement;
        //   link.href = url;
        saveAs(blob, filename);

        //   link.download = "Ficha mía.pdf";
        //   return link;
      });
    // return this.http
    //   .get<Blob>(`http://localhost:9000/api/pdftest`, {
    //     responseType: "blob" as "json"
    //   })
    //   .subscribe(data => {
    //     var blob = new Blob([data], { type: "application/pdf" });
    //     //   var url = window.URL.createObjectURL(blob);

    //     //   const link = targetEl.nativeElement;
    //     //   link.href = url;
    //     saveAs(blob, filename);

    //     //   link.download = "Ficha mía.pdf";
    //     //   return link;
    //   });
    //   .subscribe(data => this.downloadFile(data), error => console.log(error));
  }
}
