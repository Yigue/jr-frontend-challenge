import { Formulario, useColorModeValue } from "@/components";
import { useProperties } from "@/hooks/usePropertys";
import { Center, Stack, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function FormPage() {
  const { id } = useParams<{ id: string }>();
  const { properties } = useProperties();
  const propertyUpdate = id
    ? properties.find((property) => property.id === id)
    : undefined;

 

  return (
    <Center p={"3rem"}>
      <Stack
        p={"2.5rem"}
        borderRadius="md"
        shadow={"md"}
        alignItems="center"
        justifyContent="center"
        bg={useColorModeValue("white.400", "gray.200")}
      >
        <Text textStyle="6xl">Property Forms</Text>
        <Text textStyle="1xl" marginBottom={8}>
          Creacion/Actualizacion de propiedad
        </Text>
        {propertyUpdate ? (
          <Formulario propertyUpdate={propertyUpdate} />
        ) : (
          <Formulario propertyUpdate={propertyUpdate} />
        )}
      </Stack>
    </Center>
  );
}

export default FormPage;
