interface ErrorCode {
  [index: number]: string;
}

export const httpErrorMessages: ErrorCode = {
  0: "Error conectando con el servidor. Revise su conexión",
  400: "Petición inválida. Intente de nuevo",
  401: "No tiene suficientes permisos",
  404: "Recurso no encontrado",
  409: "Ese email está en uso. Pruebe con otro",
  500: "Hubo un error en el servidor. Por favor, intente de nuevo"
};
