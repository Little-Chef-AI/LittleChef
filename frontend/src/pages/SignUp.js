import React, { useState, useRef, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";

const handleSubmit = async (e) => {
  e.preventDefault();
};

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function onSubmit(event) {
    var fd = new FormData();
    fd.append("email", email);
    fd.append("password", password);

    event.preventDefault();
    // set_is_loading(true);
    try {
      let response = await fetch("/signup.php", {
        method: "POST",
        body: fd,
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          let message = response["message"];
          if (!message) {
            navigate("/login");
          }
        });
    } catch (error) {
      console.log(error);
      console.log("Handling Error");
    }
  }

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
              <Input
                textColor="white"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel textColor="white" m={0}>
                Password
              </FormLabel>
              <Input
                textColor="white"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Box paddingTop={10}>
              <Button
                backgroundColor="#d87e79"
                textColor="white"
                size="lg"
                height="70px"
                width="300px"
                type="submit"
                onClick={onSubmit}
              >
                Create Account
              </Button>
            </Box>
            <Box color="#d87e79" fontWeight="light" fontSize="2xl">
              Already have an account?{" "}
              <Link color="#d0b280" onClick={() => navigate("/login")}>
                Login
              </Link>
            </Box>
          </VStack>
        </Flex>
      </Center>
    </Box>
  );
}
