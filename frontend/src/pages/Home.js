import React, { useState } from "react";

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

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

function Home() {
  const [ingredientsInput, setingredientsInput] = useState("");
  const [result, setResult] = useState("");
  //   const [is_loading, set_is_loading] = useState(false);

  async function onSubmit(event) {
    console.log("calling openai api");

    const APIBody = {
      model: "text-davinci-003",
      prompt:
        "You are a chef. You know how to cook food with limited ingredients. You specialize in recipes for busy people. Brainstorm a recipe that only uses the ingredients provided. You can use general ingredients like oils, salt, pepper, general spices and condiments. The ingredients you can use are:" +
        ingredientsInput,
      max_tokens: 2000,
      temperature: 0,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };

    event.preventDefault();
    // set_is_loading(true);
    await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${REACT_APP_API_KEY}`,
      },
      body: JSON.stringify(APIBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setResult(data.choices[0].text); //recipe
      });
  }

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
            marginRight={"18%"}
            pt={20}
          >
            Hello, Welcome to Little Chef. How may I help you?
          </Box>
          <Box
            color="#d87e79"
            fontWeight="light"
            fontSize="4xl"
            marginRight={"28%"}
            mt={10}
          >
            List the food you have in your fridge that you would like to cook
            with.{" "}
          </Box>
          <Box
            color="#d87e79"
            fontWeight="seminbold"
            fontSize="4xl"
            marginRight={"53%"}
            mt={10}
          >
            Ingredients:
          </Box>
          {/* saved ingredients */}
          <Box
            w={"60%"}
            p={20}
            mt={15}
            marginLeft={"18%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Input
              w="60vw"
              h="15vh"
              placeholder="Type your ingredients here"
              size="lg"
              color="white"
              fontSize={45}
              type="text"
              onChange={(e) => setingredientsInput(e.target.value)}
            />
          </Box>
          {/* Button to submit */}
          <Box>
            <Button
              onClick={onSubmit}
              color="#d87e79"
              size="lg"
              height="90px"
              width="2000px"
            >
              Submit
            </Button>
          </Box>
          <Box
            w="100vw"
            h="100vw"
            bg="primary"
            color="white"
            fontSize={45}
            p={5}
          >
            {result !== "" ? <h3>{result}</h3> : null}
          </Box>
        </Flex>
      </div>
    </div>
  );
}

export default Home;
