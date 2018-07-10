import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ConfirmDialogData } from "../../models/confirm-dialog-data.model";

@Component({
  selector: "rst-confirm-dialog",
  templateUrl: "./confirm-dialog.component.html",
  styleUrls: ["./confirm-dialog.component.css"]
})
export class ConfirmDialogComponent implements OnInit {
  defaultTitle = "Delete";
  defaultMessage = "Are you sure you want to delete this?";

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData
  ) {}

  ngOnInit(): void {}

  onAccept() {
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
