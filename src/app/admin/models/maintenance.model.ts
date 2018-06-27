import { MaintenanceCategory } from "./maintenance-category.model";

export interface Maintenance {
  id?: string | number;
  date?: string;
  mileage?: number;
  category?: MaintenanceCategory;
}
