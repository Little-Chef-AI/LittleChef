import React from "react";
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
  Heading,
  Link,
  Divider,
  VStack,
  Container,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";

function SavedRecipes() {
  return (
    <Box backgroundColor="#3c3f63" w={"100vw"} h={"100vh"}>
      <Navbar />
      <Divider orientation="horizontal" />

      {/* actual code */}
      <Center>
        <Flex
          my={10}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={8}
        >
          <VStack gap={10} w={["95%", "80%", "60%", "50%", "35%"]} h={"100%"}>
            <Box
              alignItem="flex-start"
              w="60vw"
              textColor="#d87e79"
              fontWeight="semibold"
              fontSize="6xl"
            >
              {" "}
              Saved Recipes
            </Box>
            <Box
              alignItem="flex-start"
              w="60vw"
              color="#d87e79"
              fontWeight="light"
              fontSize="4xl"
            >
              Here are your saved recipes along with the ingredients you
              inputted.{" "}
            </Box>

            {/* separate box with ingredients and generated recipe */}
            <VStack>
              {/* left side */}
              <Box
                alignItem="flex-start"
                w="60vw"
                color="#d87e79"
                fontWeight="seminbold"
                fontSize="4xl"
              >
                Listed Ingredients:
              </Box>
            </VStack>

            <VStack>
              <Box
                alignItem="flex-start"
                w="60vw"
                color="#d87e79"
                fontWeight="seminbold"
                fontSize="4xl"
              >
                Recipe
              </Box>
              {/* generated recipe */}
              <Box
                w="60vw"
                h="30vh"
                bg="primary"
                color="white"
                fontSize={45}
                p={5}
                border={"5px solid white"}
                borderRadius={10}
              ></Box>
              <Divider padding="2%" orientation="horizontal" w="80vw" />
            </VStack>
          </VStack>
        </Flex>
      </Center>
    </Box>
  );
}

export default SavedRecipes;
