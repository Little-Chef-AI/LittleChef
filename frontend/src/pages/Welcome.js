import React from "react";
import { Text, Flex, Box, Button, Center, Link } from "@chakra-ui/react";

// const handleSubmit = async (e) => {
//   e.preventDefault();
// };
export default function Welcome() {
  return (
    <div>
      <Flex
        w="100vw"
        h="100vh"
        backgroundColor="#3c3f63"
        display="flex"
        align="center"
        justify="center"
        direction="column"
      >
        <Box color="#d87e79" fontWeight="extrabold" fontSize="6xl" mt={40}>
          Welcome to Little Chef
        </Box>
        <Box paddingTop={10}>
          <Link href="/home">
            <Button
              color="#d87e79"
              size="lg"
              height="70px"
              width="600px"
              type="submit"
              onClick={() => {}}
            >
              Get Started
            </Button>
          </Link>
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
