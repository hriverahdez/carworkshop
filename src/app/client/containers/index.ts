import { ClientHomeComponent } from "./client-home/client-home.component";
import { ClientProfileInfoComponent } from "./client-profile-info/client-profile-info.component";
import { ClientProfileComponent } from "./client-profile/client-profile.component";

export const containers: any[] = [
  ClientHomeComponent,
  ClientProfileInfoComponent,
  ClientProfileComponent
];

export * from "./client-home/client-home.component";
export * from "./client-profile/client-profile.component";
export * from "./client-profile-info/client-profile-info.component";
