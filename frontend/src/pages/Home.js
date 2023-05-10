import React, { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";

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
  Textarea,
  HStack,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
const REACT_APP_PHP_BASE_URL = process.env.REACT_APP_PHP_BASE_URL;

function Home() {
  const [email, setEmail] = useState(null);
  const [ingredientsInput, setingredientsInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let email = localStorage.getItem("currentUser");
    if (email) {
      setEmail(email);
    } else {
      navigate("/welcome");
    }
  }, []);

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
    setLoading(true);
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
        setLoading(false);
      });
  }

  async function saveRecipe() {
    if (result) {
      var fd = new FormData();
      fd.append("email", email);
      fd.append("recipe", result);

      // set_is_loading(true);
      try {
        let response = await fetch(REACT_APP_PHP_BASE_URL + "/saveRecipe.php", {
          method: "POST",
          body: fd,
        })
          .then((response) => response.json())
          .then((response) => console.log(response));
      } catch (error) {
        console.log("Handling Error");
      }
    }
  }

  function formatString(s) {
    let stringToSplit = s || "";
    let strings = stringToSplit.split("\n");
    return strings;
  }

  return (
    <Box backgroundColor="#3c3f63" w={"100vw"} h={"100%"} minH={"100vh"}>
      <Navbar />
      <Divider orientation="horizontal" />

      {/* actual code */}
      <Center>
        <Flex my={10} justifyContent={"center"} gap={8}>
          <VStack gap={2} h={"100%"}>
            <Box
              alignItem="flex-start"
              textColor="#d87e79"
              fontWeight="semibold"
              fontSize="5xl"
            >
              {" "}
              Hello, Welcome to Little Chef. How may I help you?
            </Box>
            <Box
              alignItem="flex-start"
              color="#d87e79"
              fontWeight="light"
              fontSize="4xl"
            >
              List the food you have in your fridge that you would like to cook
              with. Then save your recipe!{" "}
            </Box>
            {/* separate box with ingredients and generated recipe */}
            <VStack w={"60vw"}>
              {/* left side */}
              <Box
                alignItem="flex-start"
                w="60vw"
                color="#d87e79"
                fontWeight="seminbold"
                fontSize="4xl"
              >
                Ingredients:
              </Box>
              {/* ingredients list */}
              <Box>
                <Textarea
                  textColor="white"
                  borderColor="white"
                  placeholder="Type your ingredients here."
                  fontSize="2xl"
                  w="60vw"
                  size="lg"
                  type="text"
                  onChange={(e) => setingredientsInput(e.target.value)}
                />
              </Box>
              {/* submit button to get generated recipe */}
              <Box pt={6}>
                <Button
                  onClick={onSubmit}
                  textColor="white"
                  backgroundColor="#d87e79"
                  size="lg"
                  height="70px"
                  width="500px"
                >
                  Submit
                </Button>
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
                bg="primary"
                color="white"
                fontSize="1xl"
                p={5}
                border={"5px solid white"}
                borderRadius={10}
              >
                {loading ? (
                  <Spinner />
                ) : result !== "" ? (
                  <h3>
                    {formatString(result).map((line) => (
                      <p>{line}</p>
                    ))}
                  </h3>
                ) : null}
              </Box>

              {/* save recipe button */}
              <Box>
                <Button
                  onClick={saveRecipe}
                  textColor="white"
                  backgroundColor="#d87e79"
                  size="lg"
                  height="70px"
                  width="500px"
                >
                  Save Recipe
                </Button>
              </Box>
            </VStack>
          </VStack>
        </Flex>
      </Center>
    </Box>
    // <div>
    //   <Navbar />
    //   <Divider orientation="horizontal" />
    //   <div>
    //     <Flex
    //       backgroundColor="#3c3f63"
    //       display="flex"
    //       direction="column"
    //       h="100vh"
    //     >
    //       <Box
    //         color="#d87e79"
    //         fontWeight="semibold"
    //         fontSize="6xl"
    //         marginRight={"18%"}
    //         pt={20}
    //       >
    //         Hello, Welcome to Little Chef. How may I help you?
    //       </Box>
    //       <Box
    //         color="#d87e79"
    //         fontWeight="light"
    //         fontSize="4xl"
    //         marginRight={"28%"}
    //         mt={10}
    //       >
    //         List the food you have in your fridge that you would like to cook
    //         with.{" "}
    //       </Box>
    //       <Box
    //         color="#d87e79"
    //         fontWeight="seminbold"
    //         fontSize="4xl"
    //         marginRight={"53%"}
    //         mt={10}
    //       >
    //         Ingredients:
    //       </Box>
    //       {/* saved ingredients */}
    //       <Box
    //         w={"60%"}
    //         p={20}
    //         mt={15}
    //         marginLeft={"18%"}
    //         justifyContent={"center"}
    //         alignItems={"center"}
    //       >
    //         <Input
    //           w="60vw"
    //           h="15vh"
    //           placeholder="Type your ingredients here"
    //           size="lg"
    //           color="white"
    //           fontSize={45}
    //           type="text"
    //           onChange={(e) => setingredientsInput(e.target.value)}
    //         />
    //       </Box>
    //       {/* Button to submit */}
    //       <Box>
    //         <Button
    //           onClick={onSubmit}
    //           color="#d87e79"
    //           size="lg"
    //           height="90px"
    //           width="2000px"
    //         >
    //           Submit
    //         </Button>
    //       </Box>
    //       <Box
    //         w="100vw"
    //         h="100vw"
    //         bg="primary"
    //         color="white"
    //         fontSize={45}
    //         p={5}
    //       >
    //         {result !== "" ? <h3>{result}</h3> : null}
    //       </Box>
    //     </Flex>
    //   </div>
    // </div>
  );
}

export default Home;
