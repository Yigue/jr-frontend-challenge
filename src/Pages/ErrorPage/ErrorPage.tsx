import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'


function ErrorPage() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      bg="gray.50"
    >
      <Box
        maxW="md"
        mx="auto"
        px={{ base: '4', md: '8' }}
        py="16"
        bg="white"
        borderRadius="lg"
        shadow="lg"
      >
        <VStack gap="4" align="center">
          <Heading color="red.500" as="h1" size="xl">
            Unexpected error
          </Heading>
          <Text color="gray.600">
            Sorry, we are experiencing an unexpected error. Please try again
            later.
          </Text>
          <Link  href="/" >
            <Link
              color="blue.500"
              fontWeight="bold"
              href="/"
              _hover={{ textDecoration: 'underline' }}
            >
              Go back home
            </Link>
          </Link>
        </VStack>
      </Box>
    </Flex>
  )
}

export default ErrorPage
