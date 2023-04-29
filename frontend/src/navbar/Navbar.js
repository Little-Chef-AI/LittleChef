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
  Divider,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/home");
  }
  return (
    <Flex align="center" justify="space-between" bg="primary" p="10">
      <Box>
        <Flex align="center" justify="center">
          <Button
            onClick={handleClick}
            bg="white"
            size="lg"
            mr={4}
            variant="ghost"
          >
            Home
          </Button>
          <Button
            onClick={handleClick}
            bg="white"
            size="lg"
            mr={4}
            variant="ghost"
          >
            Saved Recipes
          </Button>
          <Button
            onClick={handleClick}
            bg="white"
            size="lg"
            mr={4}
            variant="ghost"
          >
            Profile
          </Button>
        </Flex>
      </Box>
    </Flex>

    // <div>
    //   <Flex
    //     w="100vw"
    //     h="30vh"
    //     bg="primary"
    //     display="flex"
    //     align="center"
    //     justify="center"
    //     direction="column"
    //     paddingBottom={20}
    //   >
    //     <Tabs variant="soft-rounded" colorScheme="green">
    //       <TabList>
    //         <Tab> Home </Tab>
    //         <Tab> Saved Recipes </Tab>
    //         <Tab> Profile </Tab>
    //       </TabList>
    //       <Divider orientation="horizontal" w="90vw" paddingTop={10} />
    //       <TabPanels>
    //         <TabPanel></TabPanel>
    //         <p> Test </p>
    //         <TabPanel></TabPanel>
    //       </TabPanels>
    //     </Tabs>
    //   </Flex>
    // </div>
  );
}

// const Header = () => {
//     return(
//         <>
//         <div className="header">
//             <div className="logo">
//                 <img src={headerImg} alt="" />
//             </div>
//             <div className="Overlay"></div>
//         </div>
//         <div className="Content">
//             <p></p>
//         </div>
//         </>
//     )
// }
