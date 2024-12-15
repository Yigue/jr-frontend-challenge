import axios from "axios";
import { Property } from "@/models/Property.model";
import { ApiResponse } from "@/models/ApiResponse.model";
import { loadAbort } from "@/utils/loadAbort.utils";
import UseApiCall from "@/models/useApi.model";

export const getProperties = (query?: string, page?: number): UseApiCall => {
  const controller = loadAbort();
  return {
    call: axios.get(`/properties`, {
      params: {
        search: query ,
        page: page ,
      },
      signal: controller.signal,
    }),
    controller,
  };
};
export const getPropertyById = async (id: string): Promise<Property> => {
  const response = await axios.get<ApiResponse<Property>>(
    `/api/properties/${id}`
  );
  return response.data;
};

export const newProperty = (property: Property): UseApiCall => {
  const controller = loadAbort();
  return {
    call: axios.post<null>(
      `/api`,
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
      `/api/properties/${property.id}`,
      property,
      { signal: controller.signal }
    ),
    controller,
  };
};
