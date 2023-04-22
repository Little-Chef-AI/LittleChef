import React from "react";
import "./SignUp.css";
import {
  Text,
  Flex,
  Box,
  Button,
  Center,
  Input,
  Stack,
  Link,
} from "@chakra-ui/react";
//import { Link as ReachLink } from "@reach/router";

// <Link as={ReachLink} to="/home">
//   Home
// </Link>;

const handleSubmit = async (e) => {
  e.preventDefault();
};

export default function SignUp() {
  return (
    <div>
      <Flex
        w="100vw"
        h="100vh"
        bg="primary"
        display="flex"
        align="center"
        justify="center"
        direction="column"
      >
        <Box
          color="secondary"
          fontWeight="extrabold"
          fontSize="6xl"
          mt={3}
          paddingRight={1700}
        >
          SignUp
        </Box>
        <Box
          color="secondary"
          fontWeight="light"
          fontSize="5xl"
          mt={5}
          paddingTop={30}
          paddingBottom={0}
          paddingRight={1070}
        >
          Create account by filling your email and password.
        </Box>

        <Stack>
          <Box
            color="secondary"
            fontWeight="light"
            fontSize="2xl"
            mt={40}
            paddingTop={10}
            paddingRight={1800}
          >
            Email
          </Box>
          <Input placeholder="Enter email" size="lg" />
          <Box
            color="secondary"
            fontWeight="light"
            fontSize="2xl"
            mt={40}
            paddingTop={30}
            paddingRight={1750}
          >
            Password
          </Box>
          <Input placeholder="Enter password" size="lg" />
        </Stack>

        <Box paddingTop={300}>
          <Button color="secondary" size="lg" height="70px" width="600px">
            Create Account
          </Button>
        </Box>

        <Box
          color="secondary"
          fontWeight="light"
          fontSize="2xl"
          mt={40}
          paddingBottom={2}
          paddingLeft={1500}
        >
          Already have an account? Login
        </Box>
      </Flex>
    </div>

    // <div className="home">
    //   <h1>Welcome to Little Chef</h1>
    //   <button type="submit" className="GetStartedButton" onClick={handleSubmit}>
    //     Get Started <a href="./welcome"></a>
    //   </button>
    // </div>
  );
}
