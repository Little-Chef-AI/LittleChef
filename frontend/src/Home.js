import React from "react";
import "./Home.css";
import { Text, Flex, Box, Button, Center } from "@chakra-ui/react";

// const handleSubmit = async (e) => {
//   e.preventDefault();
// };
export default function Home() {
  return (
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
        <Box color="secondary" fontWeight="extrabold" fontSize="6xl" mt={40}>
          Welcome to Little Chef
        </Box>
        <Box paddingTop={10}>
          <Button color="secondary" size="lg" height="70px" width="600px">
            Get Started
          </Button>
        </Box>
      </Flex>
    </div>

    // <div className="home">
    //   <h1>Welcome to Little Chef</h1>
    //   <button type="submit" className="GetStartedButton" onClick={handleSubmit}>
    //     Get Started <a href="./welcome"></a>
    //   </button>
    // </div>
  );
}
