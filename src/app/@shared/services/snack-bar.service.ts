import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable()
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  openSimpleSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action, {
      verticalPosition: "top",
      horizontalPosition: "right",
      duration: 5000
    });
  }

  dismiss() {
    this.snackBar.dismiss();
  }
}
