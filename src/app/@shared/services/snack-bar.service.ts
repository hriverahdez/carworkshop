import { Injectable } from "@angular/core";
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
  MatSnackBarHorizontalPosition
} from "@angular/material";

@Injectable({ providedIn: "root" })
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  openSimpleSnackBar(
    message: string,
    action?: string,
    duration: number = 5000,
    verticalPosition: MatSnackBarVerticalPosition = "top",
    horizontalPosition: MatSnackBarHorizontalPosition = "right"
  ) {
    this.snackBar.open(message, action, {
      verticalPosition,
      horizontalPosition,
      duration
    });
  }

  dismiss() {
    this.snackBar.dismiss();
  }
}
