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
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <Box backgroundColor="#3c3f63" h={"100%"} minH={"100vh"}>
      <Center pt={"10vh"}>
        <VStack gap={2} paddingLeft={"10vw"} paddingRight={"10vw"}>
          <Heading
            fontSize="6xl"
            mt={40}
            textColor="#d87e79"
            textAlign="center"
          >
            Welcome to Little Chef
          </Heading>
          <HStack>
            <Link onClick={() => navigate("/login")}>
              <Button
                color="#d87e79"
                size="md"
                w={"25vw"}
                type="submit"
                onClick={() => {}}
              >
                Login
              </Button>
            </Link>
            <Link onClick={() => navigate("/signup")}>
              <Button
                color="#d87e79"
                size="md"
                w={"25vw"}
                type="submit"
                onClick={() => {}}
              >
                Sign Up
              </Button>
            </Link>
          </HStack>
        </VStack>
      </Center>
    </Box>
  );
}
