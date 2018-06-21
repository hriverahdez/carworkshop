import { AuthEffects } from "./auth.effects";
import { RouterEffects } from "./router.effects";
import { UIEffects } from "./ui.effects";

export const effects: any[] = [AuthEffects, RouterEffects, UIEffects];

export * from "./auth.effects";
export * from "./router.effects";
export * from "./ui.effects";
