import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable({ providedIn: "root" })
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  openSimpleSnackBar(
    message: string,
    action?: string,
    duration: number = 5000
  ) {
    this.snackBar.open(message, action, {
      verticalPosition: "top",
      horizontalPosition: "right",
      duration
    });
  }

  dismiss() {
    this.snackBar.dismiss();
  }
}
