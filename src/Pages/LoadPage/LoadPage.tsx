import { Spinner, VStack, Text, Box } from "@chakra-ui/react";

function LoadPage() {
  return (
    <Box w={"full"} h={"100vh"} display={"flex"} justifyContent={"center"}>
      <VStack mt={10}>
        <Spinner size="xl" color="blue.500" />
        <Text>Cargando propiedades...</Text>
      </VStack>
    </Box>
  );
}

export default LoadPage;
