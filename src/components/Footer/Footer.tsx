import { Box, Text, Stack, Link } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

export const Footer = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box
      bg={bgColor}
      color={textColor}
      mt="auto"
      alignItems="center"
      px={"4rem"}
      justifyContent="space-between"
      py="8"
    >
      <Stack
        direction={["column", "row"]}
        gap="8"
        justify="space-between"
        align="center"
      >
        <Text>© 2024 Real Estate. All rights reserved.</Text>
        <Stack direction="row" gap="6">
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Privacy Policy</Link>
        </Stack>
      </Stack>
    </Box>
  );
};
