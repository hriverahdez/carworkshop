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
      .pipe(
        map(data => {
          var blob = new Blob([data], { type: "application/pdf" });

          saveAs(blob, filename);
        })
      );
  }
}
