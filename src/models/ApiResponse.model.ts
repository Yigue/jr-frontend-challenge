import { Property } from "./Property.model";

export type ApiResponse<T> = T ;


    
  
  // Respuesta para lista de propiedades
export type PropertiesResponse = ApiResponse<Property[]>;

// Respuesta para una propiedad individual
export type PropertyResponse = ApiResponse<Property>;
