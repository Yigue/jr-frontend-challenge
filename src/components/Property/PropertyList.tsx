import {
  Box,
  Input,
  Button,
  SimpleGrid,
  Container,
  HStack,
  Center,
} from "@chakra-ui/react";

import { useState } from "react";

import { PropertyCard } from "./PropertyCard";

import { InputGroup } from "../ui/input-group";
import { LuSearch } from "react-icons/lu";
import { Property } from "@/models/Property.model";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../ui/Pagination";
import { filterAndPaginate } from "@/utils/pagination";

interface PropertyListProps {
  properties: Property[];
  onPropertyClick: (property: Property) => void;
}

export const PropertyList = ({
  properties,
  onPropertyClick,
}: PropertyListProps) => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage=12
  const { totalPages, currentProperties, } = filterAndPaginate(
    properties,
    search,
    currentPage,
    sortOrder,
    propertiesPerPage
  );

  return (
    <Container alignItems="center" justifyContent="center" width="full">
      <HStack mb="8" flexDir={["column", "row"]} m="4vw">
        <InputGroup flex="1" startElement={<LuSearch />}>
          <Input
            placeholder="Search by title or address..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>

        <Button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          colorPalette={"red"}
          variant={"solid"}
          minW="200px"
        >
          Price: {sortOrder === "asc" ? "Low to High" : "High to Low"}
        </Button>
      </HStack>

      <SimpleGrid gap="1.5vw" columns={[1, null, 2, 3]} m="4vw">
        {currentProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onClick={() => onPropertyClick(property)}
          />
        ))}
      </SimpleGrid>

      {totalPages > 1 && (
        <Box mt="8" justifyContent={"center"} alignItems={"center"}>
          <Center>
            <PaginationRoot
              page={currentPage}
              count={totalPages}
              pageSize={propertiesPerPage}
              onPageChange={(e) => setCurrentPage(e.page)}
            >
              <HStack>
                <PaginationPrevTrigger bg={"gray.500"} />
                <PaginationItems color={"black"} />
                <PaginationNextTrigger bg={"gray.500"} />
              </HStack>
            </PaginationRoot>
          </Center>
        </Box>
      )}
    </Container>
  );
};
