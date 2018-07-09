import { Params } from "@angular/router";

export interface PanelLink {
  text?: string;
  url?: string;
  queryParams?: Params;
}

export interface PanelCategories {
  id: number;
  iconName?: string;
  name?: string;
  mainLink?: PanelLink;
  supportLink?: PanelLink;
}
