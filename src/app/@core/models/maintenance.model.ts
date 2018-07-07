import { MaintenanceCategory } from "./maintenance-category.model";

export interface Maintenance {
  id?: number;
  date?: string;
  mileage?: number;
  category?: MaintenanceCategory;
}
