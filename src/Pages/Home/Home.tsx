import { Center, Container, Text } from "@chakra-ui/react";
import { PropertyDetail, PropertyList, useColorModeValue } from "@/components";
import { Property } from "@/models/Property.model";
import { useProperties } from "@/hooks/usePropertys";
import LoadPage from "../LoadPage/LoadPage";

function Home() {
  const { properties, loading, selectedProperty, setSelectedProperty } =
    useProperties();
  const bgColor = useColorModeValue("white", "gray.100");
  if (loading)
    return (
      <LoadPage />
    );

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleBackClick = () => {
    setSelectedProperty(null);
  };

  return (
    <Center bg={bgColor} flex={1} flexDirection="column">
      {selectedProperty ? (
        <PropertyDetail property={selectedProperty} onBack={handleBackClick} />
      ) : (
        <></>
      )}
      <Text fontSize="4xl" fontWeight="bold" mt={"2rem"}>
        Listado de Propiedades
      </Text>
      <Container
        maxW="container.xl"
        pb={"2rem"}
        opacity={selectedProperty ? "0.3" : "1"}
      >
        <PropertyList
          properties={properties}
          onPropertyClick={handlePropertyClick}
        />
      </Container>
    </Center>
  );
}

export default Home;
