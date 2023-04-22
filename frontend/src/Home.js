import React from "react";
import "./Home.css";
import Header from "./navbar/Header";
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

export default function Home() {
  return (
    <div>
      <Header />
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
            fontWeight="medium"
            fontSize="6xl"
            paddingRight={600}
            paddingTop={1}
          >
            Hello, Welcome to Little Chef. How may I help you?
          </Box>
          <Box
            color="secondary"
            fontWeight="light"
            fontSize="2xl"
            mt={20}
            paddingRight={1300}
          >
            List the food you have in your fridge that you would like to cook
            with.
          </Box>
          <Box
            color="secondary"
            fontWeight="semibold"
            fontSize="3xl"
            paddingTop={20}
            paddingRight={1900}
          >
            Question
          </Box>
          <Box paddingTop={5}>
            <Input
              w="80vw"
              h="15vh"
              placeholder="Type your ingredients here"
              size="lg"
              color="white"
              fontSize={45}
            />
          </Box>
          <Box paddingTop={10}>
            <Button color="secondary" size="lg" height="90px" width="2000px">
              Submit
            </Button>
          </Box>
        </Flex>
      </div>
    </div>
  );
}
