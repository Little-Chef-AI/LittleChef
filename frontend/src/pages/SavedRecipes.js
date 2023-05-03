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
    <div>
      <Navbar />
      <Divider orientation="horizontal" />
      <div>
        <Flex
          backgroundColor="#3c3f63"
          display="flex"
          direction="column"
          h="100vh"
        >
          <Box
            color="#d87e79"
            fontWeight="semibold"
            fontSize="6xl"
            marginRight={"48%"}
            mt={20}
          >
            Saved Recipes
          </Box>
          <Box
            color="#d87e79"
            fontWeight="light"
            fontSize="4xl"
            marginRight={"29%"}
            mt={10}
          >
            Here are your saved recipes along with the ingredients you inputted.
          </Box>
          <Box
            color="#d87e79"
            fontWeight="light"
            fontSize="4xl"
            marginRight={"51%"}
            mt={10}
          >
            Listed ingredients:
          </Box>
          {/* saved ingredients */}
          <Box
            border={"5px solid #9A9A9A"}
            w={"60%"}
            p={20}
            mt={20}
            marginLeft={"20%"}
            borderRadius={20}
            justifyContent={"center"}
            alignItems={"center"}
          ></Box>
          <Stack mt={20} padding="50px">
            <Divider orientation="horizontal" />
          </Stack>
        </Flex>
      </div>
    </div>
  );
}

export default SavedRecipes;
