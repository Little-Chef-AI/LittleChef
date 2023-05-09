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
//import { Link as ReachLink } from "@reach/router";
import { useNavigate } from "react-router-dom";

// const handleSubmit = async (e) => {
//   e.preventDefault();
// };

export default function Login() {
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
      let response = await fetch("/signin.php", {
        method: "POST",
        credentials: "include",
        body: fd,
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          localStorage.setItem("currentUser", response.email);
          navigate("/home");
        });
    } catch (error) {
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
            <Heading textColor="#d87e79">Login</Heading>
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
              <Link>
                <Button
                  backgroundColor="#d87e79"
                  textColor="white"
                  size="lg"
                  height="70px"
                  width="300px"
                  onClick={onSubmit}
                >
                  Login
                </Button>
              </Link>
            </Box>

            <Box color="#d87e79" fontWeight="light" fontSize="2xl">
              Don't have an account?{" "}
              <Link color="#d0b280" onClick={() => navigate("/signup")}>
                Create an Account
              </Link>
            </Box>
          </VStack>
        </Flex>
      </Center>
    </Box>
  );
}