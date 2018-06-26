import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig
} from "@angular/material";
import { ConfirmDialogComponent } from "../../components/confirm-dialog/confirm-dialog.component";
import { ConfirmDialogData } from "../../models/confirm-dialog-data.model";

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {}

  defaultDialogConfig: MatDialogConfig = {
    // width: "80%",
    // disableClose: true
  };

  confirm(data: ConfirmDialogData) {
    let confirmDialogConfig: MatDialogConfig = {
      disableClose: true,
      data
    };

    return this.openDialog(
      ConfirmDialogComponent,
      confirmDialogConfig
    ).afterClosed();
  }

  customDialogComponent<T>(
    T,
    config: MatDialogConfig = this.defaultDialogConfig
  ) {
    return this.openDialog(T, config).afterClosed();
  }

  private openDialog(T, config: MatDialogConfig) {
    let dialogRef = this.dialog.open(T, config);

    return dialogRef;
  }
}
