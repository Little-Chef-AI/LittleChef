import React from "react";
import "./Home.css";
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
import Navbar from "./navbar/Navbar";

function Home() {
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
            />
          </Box>
          {/* Button to submit */}
          <Box>
            <Button color="#d87e79" size="lg" height="90px" width="2000px">
              Submit
            </Button>
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
