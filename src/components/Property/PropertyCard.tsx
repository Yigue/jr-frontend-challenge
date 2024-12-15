import { formatPrice, formatDate } from "@/utils/formatter";
import {
  Badge,
  Box,
  Group,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { Property } from "@/models";

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

export function PropertyCard({ property, onClick }: PropertyCardProps) {
  const bgColor = useColorModeValue("white", "gray.100");
  const textColor = useColorModeValue("gray.800", "gray.700");

  return (
    <Box
      bg={bgColor}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      cursor="pointer"
      onClick={onClick}
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.02)" }}
    >
      <Box position="relative" height="200px">
        <Image src={property.images[0]} objectFit="cover" w="100%" h="100%" />
        <Group bottom="1" left="4" position="absolute">
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

      <VStack p="6" align="stretch" my="0.5rem" mx="1rem">
        <Text fontSize="large" fontWeight="semibold">
          {property.title}
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          {formatPrice(property.price)}
          {property.status === "rent" && "/mes"}
        </Text>
        <Text color={textColor} fontSize="md">
          {property.area} m²
        </Text>
        <Text color={textColor} fontSize="md">
          {property.address}
        </Text>

        <HStack justify="space-between" align="center">
          <Text color={textColor} fontSize="sm">
            Fecha de publicación: {formatDate(property.createdAt)}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}
