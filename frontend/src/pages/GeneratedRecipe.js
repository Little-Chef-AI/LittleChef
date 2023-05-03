import React from "react";
import Navbar from "../components/Navbar";
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
  Divider,
  VStack,
} from "@chakra-ui/react";

function GeneratedRecipe() {
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
            marginRight={"0.5%"}
            mt={20}
          >
            Here are some recipes that you can make at home with the ingredients
            provided.{" "}
          </Box>
          <Box
            color="#d87e79"
            fontWeight="semibold"
            fontSize="6xl"
            marginRight={"54%"}
            mt={20}
          >
            Enjoy!{" "}
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
          {/* buttons to save or get another recipe */}
          <Box mt={20}>
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
    // <div>
    //   <Navbar />
    //   <div>
    //     <Flex
    //       w="100vw"
    //       h="100vh"
    //       bg="primary"
    //       display="flex"
    //       align="center"
    //       justify="center"
    //       direction="column"
    //     >
    //       <Box
    //         color="secondary"
    //         fontWeight="bold"
    //         fontSize="6xl"
    //         paddingRight={95}
    //       >
    //         Here are some recipes that you can make at home with the ingredients
    //         provided.
    //       </Box>
    //       <Box
    //         fontWeight="bold"
    //         fontSize="6xl"
    //         color="secondary"
    //         paddingRight={2200}
    //       >
    //         Enjoy!
    //       </Box>
    //       <Box
    //         color="secondary"
    //         fontWeight="light"
    //         fontSize="3xl"
    //         mt={10}
    //         paddingRight={2150}
    //       >
    //         Listed Ingredients:
    //       </Box>
    //       <Box paddingTop={5}>
    //         <Input w="80vw" h="15vh" size="lg" color="white" fontSize={45} />
    //       </Box>
    //       <Box paddingTop={10}>
    //         <VStack gap={5}>
    //           <Button color="secondary" size="lg" height="90px" width="2000px">
    //             Save
    //           </Button>
    //           <Button
    //             color="secondary"
    //             size="lg"
    //             height="90px"
    //             width="2000px"
    //             mt
    //           >
    //             Get Another Recipe
    //           </Button>
    //         </VStack>
    //       </Box>
    //     </Flex>
    //   </div>
    // </div>
  );
}

export default GeneratedRecipe;
