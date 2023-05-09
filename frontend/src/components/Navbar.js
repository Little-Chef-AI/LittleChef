import React, { useRef, useContext, useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Button,
  Heading,
  Divider,
  Box,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ currentUser }) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("currentUser");
    navigate("/welcome");
  }

  return (
    <div>
      <Flex
        backgroundColor="#3c3f63"
        as="nav"
        p="10px"
        alignItems="center"
        padding="2%"
      >
        <Heading as="h1" textColor="#d87e79">
          Little Chef
        </Heading>
        <Spacer />

        <HStack spacing="20px">
          <Button
            onClick={() => navigate("/home")}
            size="lg"
            variant="ghost"
            textColor="white"
          >
            Home
          </Button>
          <Button
            onClick={() => navigate("/savedrecipes")}
            size="lg"
            variant="ghost"
            textColor="white"
          >
            Saved Recipes
          </Button>

          <Button
            size="lg"
            backgroundColor="#d0b280"
            textColor="white"
            onClick={logout}
          >
            Logout
          </Button>
        </HStack>
      </Flex>
    </div>
  );
}