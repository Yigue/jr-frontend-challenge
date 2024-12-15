import { Property } from "@/models";

export const filterAndPaginate = (
  properties: Property[],
  search: string,
  currentPage: number,
  sortOrder: "asc" | "desc",
  propertiesPerPage: number
): {
  totalPages: number;
  currentProperties: Property[];
} => {
 

  const filteredProperties = properties
    .filter(
      (property) =>
        property.title.toLowerCase().includes(search.toLowerCase()) ||
        property.address.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  return {
    totalPages,
    currentProperties,
  };
};
