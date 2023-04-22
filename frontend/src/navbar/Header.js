import React from "react";
import { ReactDOM } from "react-dom";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Divider,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <div>
      <Flex
        w="100vw"
        h="30vh"
        bg="primary"
        display="flex"
        align="center"
        justify="center"
        direction="column"
        paddingBottom={20}
      >
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab> Home </Tab>
            <Tab> Saved Recipes </Tab>
            <Tab> Profile </Tab>
          </TabList>
          <Divider orientation="horizontal" w="90vw" paddingTop={10} />
          <TabPanels>
            <TabPanel></TabPanel>
            <p> Test </p>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </div>
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
