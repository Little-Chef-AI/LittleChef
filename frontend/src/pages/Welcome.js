import React from "react";
import {
  Text,
  Flex,
  Box,
  Button,
  Center,
  Link,
  HStack,
  VStack,
  Heading,
} from "@chakra-ui/react";

export default function Welcome() {
  return (
    <Box backgroundColor="#3c3f63" w={"100vw"} h={"100vh"}>
      <Center pt="25%">
        <Flex
          my={10}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={8}
        >
          <VStack
            w={["95%", "80%", "60%", "50%", "35%"]}
            h={"100%"}
            p={10}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
          >
            <Heading fontSize="6xl" mt={40} textColor="#d87e79">
              Welcome to Little Chef
            </Heading>
            <HStack>
              <Link href="/login">
                <Button
                  color="#d87e79"
                  size="md"
                  height="70px"
                  width="600px"
                  type="submit"
                  onClick={() => {}}
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  color="#d87e79"
                  size="md"
                  height="70px"
                  width="600px"
                  type="submit"
                  onClick={() => {}}
                >
                  Sign Up
                </Button>
              </Link>
            </HStack>
          </VStack>
        </Flex>
      </Center>
    </Box>
  );
}
