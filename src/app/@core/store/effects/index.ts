import { AuthEffects } from "./auth.effects";
import { RouterEffects } from "./router.effects";
import { UIEffects } from "./ui.effects";
import { SharedEffects } from "./shared.effects";

export const effects: any[] = [
  AuthEffects,
  RouterEffects,
  UIEffects,
  SharedEffects
];

export * from "./auth.effects";
export * from "./router.effects";
export * from "./ui.effects";
export * from "./shared.effects";
