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
import Navbar from "./navbar/Navbar";
import { useNavigate } from "react-router-dom";

function ProfilePage(props) {
  const { email } = props;
  const navigate = useNavigate();

  function handleClick(id) {
    navigate("/profile/" + id);
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
            marginRight={"48%"}
            mt={20}
          >
            Profile
          </Box>
          <Box marginLeft={"50%"}>
            <Button
              color="#d87e79"
              onClick={() => {
                handleClick(props.user._id);
              }}
              mt={4}
              colorScheme="gray"
            >
              Edit Profile
            </Button>
          </Box>
        </Flex>
      </div>
    </div>
  );
}

export default ProfilePage;
