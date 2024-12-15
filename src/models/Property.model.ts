export interface Property {
  id: string;
  title: string;
  address: string;
  description: string;
  location: Coordinates;
  images: string[];
  type: PropertyType;
  status: PropertyStatus;
  isActive: boolean;
  price: number;
  area: number;
  createdAt: string;
  updatedAt: string;
  owner: Owner;
}

export interface Owner {
  name: string;
  contact: string;
}

export type PropertyType = "house" | "apartment" | "land" | "office";
export type PropertyStatus = "sale" | "rent";

export type Coordinates = {
  lat: number;
  lng: number;
};

export type PropertyFormData = Omit<Property, "id" | "createdAt" | "updatedAt"|"isActive"|"images">;
export interface PropertyData {
  title: string;
  address: string;
  type: string;
  price: number;
  status: string;
  area: number;
  description: string;
  location: {
      lat: number;
      lng: number;
  };

  owner: {
      name: string;
      contact: string;
  };
}