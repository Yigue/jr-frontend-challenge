import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { useColorModeValue } from "../ui/color-mode";

export const Navbar = () => {
  const bgColor = useColorModeValue("white", "gray.100");

  return (
    <Box  bg={bgColor} boxShadow="sm" position="sticky" top="0" zIndex="sticky">
      <Flex
        h="16"
        alignItems="center"
        px={"4rem"}
        justifyContent="space-between"
      >
        <RouterLink to="/">
          <Heading size="2xl" color="red.600">
            Real Estate
          </Heading>
        </RouterLink>
        <Flex gap="4">
          <RouterLink to="/">
            <Text textStyle="xl" fontWeight={"medium"}>
              Home
            </Text>
          </RouterLink>
          <RouterLink to="/properties/new">
            <Text textStyle="xl" fontWeight={"medium"}>
              Add Property
            </Text>
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  );
};
