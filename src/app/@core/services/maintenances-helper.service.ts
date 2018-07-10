import { Injectable } from "@angular/core";
import { Maintenance } from "../models/maintenance.model";
import { MaintenanceCategory } from "../models/maintenance-category.model";

@Injectable({ providedIn: "root" })
export class MaintenancesHelperService {
  _maintenances: Maintenance[];

  constructor() {}

  /**
   * Initialize maintenances data to be processed
   */
  initData(maintenances) {
    this._maintenances = maintenances;
  }

  /**
   * Returns the next maintenances using Mileage ordering as a priority
   */
  getNextMaintenancesByMileage() {
    const activeCategories = this.getActiveCategories(this._maintenances);

    const nextMaintenancesByMileage = activeCategories
      .map(c => this.nextMaintenanceByHighestMileageOnCategory(c))
      .filter(item => !!item);

    return nextMaintenancesByMileage;
  }

  /**
   * Returns the next maintenances using Date ordering as a priority
   */
  getNextMaintenancesByDate() {
    const activeCategories = this.getActiveCategories(this._maintenances);

    const nextMaintenancesByDate = activeCategories
      .map(c => this.nextMaintenanceByMostRecentDateOnCategory(c))
      .filter(item => !!item);

    return nextMaintenancesByDate;
  }

  private nextMaintenanceByHighestMileageOnCategory(
    category: MaintenanceCategory
  ) {
    const sortedByMileage = this._maintenances
      .filter(m => m.category.id === category.id)
      .filter(m => !!m.mileage)
      .sort(this.sortMaintenancesByMileageDESC)
      .map(this.calculateNextMaintenance(this));
    return sortedByMileage[0] ? sortedByMileage[0] : null;
  }

  private nextMaintenanceByMostRecentDateOnCategory(
    category: MaintenanceCategory
  ) {
    const sortedByDate = this._maintenances
      .filter(m => m.category.id === category.id)
      .filter(m => !!m.date)
      .sort(this.sortMaintenancesByDateDESC)
      .map(this.calculateNextMaintenance(this));
    return sortedByDate[0] ? sortedByDate[0] : null;
  }

  /**
   * Returns a list of maintenance categories that are being used in @param maintenances
   * @param maintenances
   */
  getActiveCategories(maintenances: Maintenance[]): MaintenanceCategory[] {
    return maintenances.map(m => m.category).reduce((acc: any[], item) => {
      return acc.find(i => i.id === item.id) ? acc : [...acc, item];
    }, []);
  }

  sortMaintenancesByDateDESC(m1, m2) {
    const m1Date = new Date(m1.date);
    const m2Date = new Date(m2.date);

    if (!Date.parse(m1.date)) {
      return 1;
    }

    if (!Date.parse(m2.date)) {
      return -1;
    }

    if (m1Date > m2Date) {
      return -1;
    }

    if (m1Date < m2Date) {
      return 1;
    }

    return 0;
  }

  sortMaintenancesByMileageDESC(m1, m2) {
    if (+m1.mileage > +m2.mileage) {
      return -1;
    }

    if (+m1.mileage < +m2.mileage) {
      return 1;
    }

    return 0;
  }

  /**
   * Calculates next maintenance occurrence according to its category
   * @param m
   */
  private calculateNextMaintenance(vm) {
    return (m: Maintenance) => ({
      ...m,
      date: m.date ? vm.addYears(m.date, m.category.timePeriodicity) : null,
      mileage: m.mileage ? +m.category.mileagePeriodicity + +m.mileage : null
    });
  }

  /**
   * Adds @param years years to @param maintenanceDate and returns the new date in ISOString format
   * @param maintenanceDate
   * @param years
   */
  private addYears(maintenanceDate: string, years: number) {
    const currentDate = new Date(maintenanceDate);
    const nextDate = currentDate.setFullYear(
      currentDate.getFullYear() + +years
    );
    return new Date(nextDate).toISOString();
  }
}
