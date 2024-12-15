import { Property } from "@/models";
import { useState, useEffect } from "react";
import {
  getProperties,
  newProperty,
  updateProperty,
} from "@/services/propertyService";
import axios from "axios";

export const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const fetchProperties = async () => {
    setLoading(true);
    const { call, controller } = getProperties(); 

    try {
      const response = await call;
      console.log("properties", response);
      setLoading(false);
      
    
      const properties: Property[] = response.data;
   
      
      setProperties(properties);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("La solicitud fue cancelada");
        controller.abort();
      } else {
        console.error("Error al obtener propiedades:", error);
        controller.abort();
      }
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);



  const createOne = async (property: Property) => {
    setLoading(true);
    try {
      const { call } = await newProperty(property);
      const response = await call;

      setProperties((prev) => [...prev, response.data]);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  const updateOne = async (property: Property) => {
    setLoading(true);
    try {
      await updateProperty(property);
      return true
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    properties,
   
    selectedProperty,
    setSelectedProperty,
    createOne,
    updateOne,
    loading,
  };
};
