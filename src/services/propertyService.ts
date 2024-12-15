import axios from "axios";
import { Property } from "@/models/Property.model";
import { ApiResponse } from "@/models/ApiResponse.model";
import { loadAbort } from "@/utils/loadAbort.utils";
import UseApiCall from "@/models/useApi.model";

export const getProperties = (query?: string, page?: number): UseApiCall => {
  const controller = loadAbort();
  return {
    call: axios.get<Property[]>(`https://fake-api-listings.vercel.app/properties`, {
      params: {
        search: query || "",
        page: page || 1,
      },
      signal: controller.signal,
    }),
    controller,
  };
};
export const getPropertyById = async (id: string): Promise<Property> => {
  const response = await axios.get<ApiResponse<Property>>(
    `https://fake-api-listings.vercel.app/properties/${id}`
  );
  return response.data;
};

export const newProperty = (property: Property): UseApiCall => {
  const controller = loadAbort();
  return {
    call: axios.post<null>(
      `https://fake-api-listings.vercel.app/properties`,
      property,
      { signal: controller.signal }
    ),
    controller,
  };
};
export const updateProperty = (property: Property): UseApiCall => {
  const controller = loadAbort();
  return {
    call: axios.put<null>(
      `https://fake-api-listings.vercel.app/properties/${property.id}`,
      property,
      { signal: controller.signal }
    ),
    controller,
  };
};
