import React, { useState } from 'react';
import './Home.css';
import Header from './navbar/Header';
import {
  Text,
  Flex,
  Box,
  Button,
  Center,
  Input,
  Stack,
  Link,
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
              type="text"
              onChange={(e) => setingredientsInput(e.target.value)}
            />
          </Box>
          <Box paddingTop={10}>
            <Button
              onClick={onSubmit}
              color="secondary"
              size="lg"
              height="90px"
              width="2000px"
            >
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
  );
}
