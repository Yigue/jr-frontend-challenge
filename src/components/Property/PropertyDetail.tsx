import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Badge,
  Group,
} from "@chakra-ui/react";

import { PropertyInfo } from "./PropertyInfo";
import { formatPrice } from "@/utils/formatter";

import { useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import { Property } from "@/models";

interface PropertyDetailProps {
  property: Property;
  onBack: () => void;
}

export const PropertyDetail = ({ property, onBack }: PropertyDetailProps) => {
  const navigate = useNavigate();

  return (
    <Box
      position={"fixed"}
      top={"3rem"}
      w={"full"}
      h={"full"}
      bg="blackAlpha.500"
      zIndex={9}
      overflowY="scroll"
    >
      <Container width="70%" mx="auto" py="8">
        <Box bg="white" borderRadius="lg" shadow="lg" overflow="hidden">
          <Box position="relative" h="96">
            <Group gap="1" right={"2"} mt="2" position={"absolute"}>
              <Button
                colorPalette="red"
                padding={"0.5rem"}
                onClick={() => navigate(`/properties/edit/${property.id}`)}
              >
                <FiEdit />
               
              </Button>
              <Button colorPalette="red" padding={"0.5rem"} onClick={onBack}>
                <IoArrowBack /> 
              </Button>
            </Group>
            <Image
              src={property.images[0]}
              alt={property.title}
              objectFit="cover"
              w="full"
              h="full"
            />
            <Group bottom="0.5rem" left="4" position="absolute">
              <Badge
                px="3"
                py="1"
                borderRadius="full"
                colorPalette={
                  property.type === "house"
                    ? "green"
                    : property.type === "apartment"
                    ? "blue"
                    : "teal"
                }
              >
                {property.type === "apartment"
                  ? "Apartamento"
                  : property.type === "house"
                  ? "Casa"
                  : "Terreno"}
              </Badge>
              <Badge
                colorPalette={property.status === "sale" ? "red" : "yellow"}
                px="3"
                py="1"
                borderRadius="full"
              >
                {property.status === "sale" ? "En Venta" : "En Alquiler"}
              </Badge>
              <Badge
                colorPalette={property.isActive === true ? "green" : "black"}
                px="3"
                py="1"
                borderRadius="full"
              >
                {property.isActive === true ? "Dispoible" : "No Dispoible"}
              </Badge>
            </Group>
          </Box>

          <VStack p="6" align="stretch" gap="6">
            <HStack
              justify="space-between"
              flexDir={["column", "row"]}
              align={["stretch", "center"]}
              gap="4"
            >
              <Heading size="2xl" >{property.title}</Heading>
              <Text fontSize="2xl" fontWeight="bold">
                {formatPrice(property.price)}
                {property.status=== "rent" && "/mes"}
              </Text>
            </HStack>

            <PropertyInfo property={property} />
                  
           
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};
