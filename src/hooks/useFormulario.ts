import { Property, PropertyData, PropertyStatus, PropertyType } from "@/models";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useProperties } from "./usePropertys";

const schema = z.object({
  title: z.string().min(1, "El título es obligatorio"),
  address: z.string().min(1, "La dirección es obligatoria"),
  type: z.enum(["house", "apartment", "land", "office"]),
  price: z.string().min(0, "El precio debe ser un número"),
  status: z.string().min(1, "El estado es obligatorio"),
  area: z.string().min(0, "El área debe ser un número"),
  description: z.string().min(1, "La descripción es obligatoria"),
  location: z.object({
    lat: z.number().min(-90, "La latitud debe ser un número entre -90 y 90"),
    lng: z
      .number()
      .min(-180, "La longitud debe 1ser un número entre -180 y 180"),
  }),
  owner: z.object({
    name: z.string().min(1, "El nombre del propietario es obligatorio"),
    contact: z.string().min(1, "El contacto del propietario es obligatorio"),
  }),
});

const useFormulario = (values?: Property |null) => {
  const { createOne, updateOne } = useProperties();
  let defaultForm={
    title: "titulo",
    address: "",
    type: "house",
    price: 0,
    status: "sale",
    area: 0,
    description: "",
    location: {
      lat: 0,
      lng: 0,
    },
    owner: {
      name: "",
      contact: "",
    },
  }
  if (values) {
     defaultForm={
      title: values.title,
      address: values.address,
      type: values.type,
      price: values.price,
      status: values.status,
      area: values.area,
      description: values.description,
      location: values.location,
      owner: values.owner
    }
  }
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: values ? defaultForm : {},})
  const onCreate = async (data: PropertyData) => {
    try {
      const id: string = (() => crypto.randomUUID())() as string;
      const propertyCreate: Property = {
        id: id,
        title: data.title,
        address: data.address,
        type: data.type as PropertyType,
        status: data.status as PropertyStatus,
        area: data.area,
        description: data.description,
        location: {
          lat: data.location.lat,
          lng: data.location.lng,
        },
        images: [
          `https://dummyimage.com/800x600/cccccc/000000&text=Property+${id}`,
        ],
        owner: {
          name: data.owner.name,
          contact: data.owner.contact,
        },
        isActive: true,
        price: data.price,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      
      createOne(propertyCreate);
      return true
    } catch (error) {
      return error;
    }
  };
  const onUpdate = async (data: PropertyData,propertyUpdate:Property ) => {
    try {
      const req = {
        id:propertyUpdate.id,
        title: data.title,
        address: data.address,
        type: data.type as PropertyType,
        status: data.status as PropertyStatus,
        area: data.area,
        description: data.description,
        location: {
          lat: data.location.lat,
          lng: data.location.lng,
        },
        images: propertyUpdate.images,
        owner: {
          name: data.owner.name,
          contact: data.owner.contact,
        },
        isActive: propertyUpdate.isActive,
        price: data.price,
        createdAt: propertyUpdate.createdAt,
        updatedAt: new Date().toISOString(),
      };
 

      updateOne(req);
      
      return true

    } catch (error) {
      return error;
    }
  };

  return { control, handleSubmit, errors, onCreate, onUpdate };
};

export { useFormulario };
