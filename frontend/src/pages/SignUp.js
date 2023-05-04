import React from "react";
import {
  Text,
  Flex,
  Box,
  Button,
  Center,
  Input,
  Stack,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Link,
} from "@chakra-ui/react";

const handleSubmit = async (e) => {
  e.preventDefault();
};

export default function SignUp() {
  return (
    <Box backgroundColor="#3c3f63" w={"100vw"} h={"100vh"}>
      {/* <Heading textColor="#d87e79">Login</Heading> */}
      <Center pt="15%">
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
            border={"5px solid white"}
            borderRadius={30}
          >
            <Heading textColor="#d87e79">Sign Up</Heading>
            <FormControl isRequired>
              <FormLabel textColor="white" m={0} display={"inline"}>
                Email
              </FormLabel>
              <Input textColor="white" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel textColor="white" m={0}>
                Password
              </FormLabel>
              <Input textColor="white" />
            </FormControl>
            <Box paddingTop={10}>
              <Link href="/home">
                <Button
                  backgroundColor="#d87e79"
                  textColor="white"
                  size="lg"
                  height="70px"
                  width="300px"
                >
                  Create Account
                </Button>
              </Link>
            </Box>

            <Box color="#d87e79" fontWeight="light" fontSize="2xl">
              Already have an account?{" "}
              <Link color="#d0b280" href="/signup">
                Login
              </Link>
            </Box>
          </VStack>
        </Flex>
      </Center>
    </Box>
  );
}
