import { AuthenticationService } from "./authentication.service";
import { DialogService } from "./dialog-service/dialog.service";
import { SnackBarService } from "./snack-bar.service";

export const services: any[] = [
  AuthenticationService,
  DialogService,
  SnackBarService
];

export * from "./authentication.service";
export * from "./dialog-service/dialog.service";
export * from "./snack-bar.service";
