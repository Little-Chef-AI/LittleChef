<<<<<<< HEAD
import React from "react";
import "./Home.css";
=======
import React, { useState } from 'react';
import './Home.css';
import Header from './navbar/Header';
>>>>>>> f18a5786eea3a20939608ce6f3c058eb2d57cccc
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
<<<<<<< HEAD
  Divider,
  VStack,
  Container,
} from "@chakra-ui/react";
import Navbar from "./navbar/Navbar";

function Home() {
=======
} from '@chakra-ui/react';
import { MagicSpinner } from 'react-spinners-kit';

const API_KEY = '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';

export default function Home() {
  const [ingredientsInput, setingredientsInput] = useState('');
  const [result, setResult] = useState('');
  //   const [is_loading, set_is_loading] = useState(false);

  async function onSubmit(event) {
    console.log('calling openai api');

    const APIBody = {
      model: 'text-davinci-003',
      prompt:
        'You are a chef. You know how to cook food with limited ingredients. You specialize in recipes for busy people. Brainstorm a recipe that only uses the ingredients provided. You can use general ingredients like oils, salt, pepper, general spices and condiments. The ingredients you can use are:' +
        ingredientsInput,
      max_tokens: 2000,
      temperature: 0,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };

    event.preventDefault();
    // set_is_loading(true);
    await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
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

>>>>>>> f18a5786eea3a20939608ce6f3c058eb2d57cccc
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
            mt={20}
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
<<<<<<< HEAD
          {/* Button to submit */}
          <Box>
            <Button color="#d87e79" size="lg" height="90px" width="2000px">
=======
          <Box paddingTop={10}>
            <Button
              onClick={onSubmit}
              color="secondary"
              size="lg"
              height="90px"
              width="2000px"
            >
>>>>>>> f18a5786eea3a20939608ce6f3c058eb2d57cccc
              Submit
            </Button>
          </Box>
          {/* <Box display={is_loading ? 'block' : 'none'}>
            <MagicSpinner color="black" loading={is_loading} />
          </Box> 
          <Box display={is_loading ? 'none' : 'block'}>{result}</Box> */}
          <Box
            w="100vw"
            h="100vw"
            bg="primary"
            color="white"
            fontSize={45}
            p={5}
          >
            {result !== '' ? <h3>{result}</h3> : null}
          </Box>
        </Flex>
      </div>
    </div>
    // <div className="backgroundContainer">
    //   <Navbar />
    //   <Divider orientation="horizontal" />
    //   <div>
    //     <Flex backgroundColor="#3c3f63" display="flex" direction="column">
    //       <Box color="#d87e79" fontWeight="medium" fontSize="6xl" mt={100}>
    //         Hello, Welcome to Little Chef. How may I help you?
    //       </Box>
    //       <Box
    //         color="#d87e79"
    //         fontWeight="light"
    //         fontSize="3xl"
    //         mt={10}
    //         marginRight={"50%"}
    //       >
    //         List the food you have in your fridge that you would like to cook
    //         with.
    //       </Box>
    //       <Box
    //         color="#d87e79"
    //         fontWeight="semibold"
    //         fontSize="3xl"
    //         paddingTop={20}
    //       >
    //         Question
    //       </Box>
    //       <Box paddingTop={5}>
    //         <Input
    //           w="80vw"
    //           h="15vh"
    //           placeholder="Type your ingredients here"
    //           size="lg"
    //           color="white"
    //           fontSize={45}
    //         />
    //       </Box>
    //       <Box paddingTop={10}>
    //         <Button color="#d87e79" size="lg" height="90px" width="2000px">
    //           Submit
    //         </Button>
    //       </Box>
    //     </Flex>
    //   </div>
    // </div>
  );
}

export default Home;
