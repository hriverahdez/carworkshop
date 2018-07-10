import { PanelCategories } from "../../models/panel-link.model";
import { Car } from "../../../@core/models/car.model";

export const getCommonCategories = (car: Car): PanelCategories[] => {
  return [
    {
      id: 2,
      iconName: "filter",
      name: "Filtro de aceite",
      mainLink: {
        url: "./maintenanceHistory",
        queryParams: {
          filter: 2
        }
      },
      supportLink: {
        text: "Añadir Mantenimiento",
        url: `../../../../addMaintenance/${car.id}`,
        queryParams: {
          category: 2
        }
      }
    },
    {
      id: 3,
      iconName: "air-filter",
      name: "Filtro de aire",
      mainLink: {
        url: "./maintenanceHistory",
        queryParams: {
          filter: 3
        }
      },
      supportLink: {
        text: "Añadir Mantenimiento",
        url: `../../../../addMaintenance/${car.id}`,
        queryParams: {
          category: 3
        }
      }
    },
    {
      id: 4,
      iconName: "fuel-filter",
      name: "Filtro combustible",
      mainLink: {
        url: "./maintenanceHistory",
        queryParams: {
          filter: 4
        }
      },
      supportLink: {
        text: "Añadir Mantenimiento",
        url: `../../../../addMaintenance/${car.id}`,
        queryParams: {
          category: 4
        }
      }
    },
    {
      id: 5,
      iconName: "sparkplug",
      name: "Cambio Bujías",
      mainLink: {
        url: "./maintenanceHistory",
        queryParams: {
          filter: 5
        }
      },
      supportLink: {
        text: "Añadir Mantenimiento",
        url: `../../../../addMaintenance/${car.id}`,
        queryParams: {
          category: 5
        }
      }
    },
    {
      id: 7,
      iconName: "brake",
      name: "Frenos",
      mainLink: {
        url: "./maintenanceHistory",
        queryParams: {
          filter: 7
        }
      },
      supportLink: {
        text: "Añadir Mantenimiento",
        url: `../../../../addMaintenance/${car.id}`,
        queryParams: {
          category: 7
        }
      }
    },
    {
      id: 9,
      iconName: "levels-revision",
      name: "Puntos Básicos",
      mainLink: {
        url: "./maintenanceHistory",
        queryParams: {
          filter: 9
        }
      },
      supportLink: {
        text: "Añadir Mantenimiento",
        url: `../../../../addMaintenance/${car.id}`,
        queryParams: {
          category: 9
        }
      }
    },
    {
      id: 10,
      iconName: "full-revision",
      name: "Revisión Completa",
      mainLink: {
        url: "./maintenanceHistory",
        queryParams: {
          filter: 10
        }
      },
      supportLink: {
        text: "Añadir Mantenimiento",
        url: `../../../../addMaintenance/${car.id}`,
        queryParams: {
          category: 10
        }
      }
    },
    {
      id: 11,
      iconName: "inspection",
      name: "Inspección (VW)",
      mainLink: {
        url: "./maintenanceHistory",
        queryParams: {
          filter: 11
        }
      },
      supportLink: {
        text: "Añadir Mantenimiento",
        url: `../../../../addMaintenance/${car.id}`,
        queryParams: {
          category: 11
        }
      }
    }
  ];
};
