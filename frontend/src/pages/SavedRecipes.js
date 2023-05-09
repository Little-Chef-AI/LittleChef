import React, { useState, useRef, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";

function SavedRecipes() {
  const [recipies, setRecipies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let email = localStorage.getItem("currentUser");
    if (!email) {
      navigate("/welcome");
    } else {
      fetchAPI(email);
    }
  }, []);

  async function fetchAPI(email) {
    await fetch(
      "/getSavedRecipes.php?" +
        new URLSearchParams({
          email: email,
        }),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setRecipies(data);
      });
  }

  function formatString(s) {
    let strings = s.split("\n");
    console.log(strings);
    return strings;
  }

  return (
    <Box backgroundColor="#3c3f63" w={"100vw"} h={"100%"} minH={"100vh"}>
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

            {recipies.map((recipe) => (
              <div>
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

                  <Box
                    w="60vw"
                    bg="primary"
                    color="white"
                    fontSize={45}
                    p={5}
                    border={"5px solid white"}
                    borderRadius={10}
                  >
                    <h3>
                      {formatString(recipe).map((line) => (
                        <p>{line}</p>
                      ))}
                    </h3>
                  </Box>
                  <Divider padding="2%" orientation="horizontal" w="80vw" />
                </VStack>
              </div>
            ))}
          </VStack>
        </Flex>
      </Center>
    </Box>
  );
}

export default SavedRecipes;
