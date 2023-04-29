import React from "react";
import Navbar from "./navbar/Navbar";
import {
  Text,
  Flex,
  Box,
  Button,
  Center,
  Input,
  Stack,
  Grid,
  GridItem,
  Link,
  VStack,
} from "@chakra-ui/react";

export default function GeneratedRecipe() {
  return (
    <div>
      <Navbar />
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
            fontWeight="bold"
            fontSize="6xl"
            paddingRight={95}
          >
            Here are some recipes that you can make at home with the ingredients
            provided.
          </Box>
          <Box
            fontWeight="bold"
            fontSize="6xl"
            color="secondary"
            paddingRight={2200}
          >
            Enjoy!
          </Box>
          <Box
            color="secondary"
            fontWeight="light"
            fontSize="3xl"
            mt={10}
            paddingRight={2150}
          >
            Listed Ingredients:
          </Box>
          <Box paddingTop={5}>
            <Input w="80vw" h="15vh" size="lg" color="white" fontSize={45} />
          </Box>
          <Box paddingTop={10}>
            <VStack gap={5}>
              <Button color="secondary" size="lg" height="90px" width="2000px">
                Save
              </Button>
              <Button
                color="secondary"
                size="lg"
                height="90px"
                width="2000px"
                mt
              >
                Get Another Recipe
              </Button>
            </VStack>
          </Box>
        </Flex>
      </div>
    </div>
  );
}
