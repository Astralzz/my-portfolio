import axios, { AxiosResponse } from "axios";

// Respuesta api
export type ApiResponseListType = {
  data: any;
};

/**
 * Comprobar datos indefinidos
 *
 * @throws Error
 */
export const checkDataBackend = (
  res: AxiosResponse<any, any>,
  mensaje?: string
): void => {
  // ? No existe data
  if (!res) {
    throw new Error(mensaje ?? "Los datos son indefinidos");
  }
};

/**
 * Comprobar datos indefinidos
 *
 * @throws AxiosError
 */
export const catchAxiosError = async (er: unknown | any): Promise<any> => {
  // ? Tiene error del response
  if (er?.response?.data?.error) {
    throw new Error(String(er?.response?.data?.error));
  }

  // // ? Tiene errores por default
  // if (er?.message || er?.error) {
  //   throw new Error(String(er?.message ?? er?.error));
  // }

  // ? Es error de axios
  if (axios.isAxiosError(er)) {
    // ? Existe response
    if (er?.response?.data) {
      // ? Es un array o un objeto
      if (
        Array.isArray(er?.response?.data) ||
        typeof er.response.data === "object"
      ) {
        const errors: string[] = [];

        // Iteramos solo los errores
        for (const key in er.response.data) {
          if (Object.prototype.hasOwnProperty.call(er.response.data, key)) {
            const errorMessages = er.response.data[key];
            // Si los mensajes de error son un array, los agregamos
            if (Array.isArray(errorMessages)) {
              errors.push(...errorMessages);
            } else {
              errors.push(errorMessages);
            }
          }
        }

        // Devolvemos en cadena
        throw new Error(errors.join(", "));
      }

      // Debemos error
      throw new Error(String(er?.response?.data?.error ?? ""));
    }
  }

  throw new Error(String(er?.message ?? er));
};

// * Interceptar y ver las request de hace axios
// axios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
//   console.log(`-------- REQUEST ${request.url} ----------`);
//   console.log("Request:", JSON.stringify(request));
//   console.log(`-------------------- FIN ----------------------`);
//   return request;
// });
