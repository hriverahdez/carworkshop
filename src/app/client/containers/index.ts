import { ClientHomeComponent } from "./client-home/client-home.component";
import { ClientProfileInfoComponent } from "./client-profile-info/client-profile-info.component";
import { ProfileComponent } from "./profile/profile.component";

export const containers: any[] = [
  ClientHomeComponent,
  ClientProfileInfoComponent,
  ProfileComponent
];

export * from "./client-home/client-home.component";
export * from "./profile/profile.component";
export * from "./client-profile-info/client-profile-info.component";
