import { Grid, Box, Text, Heading} from "@chakra-ui/react";
import { formatDate } from "@/utils/formatter";
import { Property } from "@/models";
import Maps from "../Maps/Maps";

interface PropertyInfoProps {
  property: Property;
}

export const PropertyInfo = ({ property }: PropertyInfoProps) => (
  <>
    <Grid templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]} gap="4">
      <Box>
        <Text fontWeight="semibold">Address</Text>
        <Text color="gray.600">{property.address}</Text>
      </Box>

      <Box>
        <Text fontWeight="semibold">Area</Text>
        <Text color="gray.600">{property.area} m²</Text>
      </Box>
      <Box>
        <Text fontWeight="semibold">Published</Text>
        <Text color="gray.600">{formatDate(property.createdAt)}</Text>
      </Box>
    </Grid>
    <Grid
      w={"full"}
      templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]}
      gap="4"

    >
      <Box columnSpan={"1"}>
        <Heading size="xl">Dueño</Heading>
        <Text fontSize="md">Nombre: {property.owner.name}</Text>
        <Text fontSize="md">Contacto: {property.owner.contact}</Text>
      </Box>
      <Box gridColumn="span 3 / span 3" w={"full"}>
        <Heading size="xl">Description</Heading>
        <Text color="gray.600" lineHeight="tall">
          {property.description}
        </Text>
      </Box>
      
    </Grid>
    <Maps location={property.location}/>
  </>
);
