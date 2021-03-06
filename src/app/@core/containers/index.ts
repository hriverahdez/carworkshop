import { LandingPageComponent } from "./landing-page/landing-page.component";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";
import { PasswordRecoveryComponent } from "./password-recovery/password-recovery.component";
import { PasswordResetComponent } from "./password-reset/password-reset.component";

export const containers: any[] = [
  LandingPageComponent,
  LayoutComponent,
  LoginComponent,
  PasswordRecoveryComponent,
  PasswordResetComponent
];

export * from "./landing-page/landing-page.component";
export * from "./layout/layout.component";
export * from "./login/login.component";
export * from "./password-recovery/password-recovery.component";
export * from "./password-reset/password-reset.component";
