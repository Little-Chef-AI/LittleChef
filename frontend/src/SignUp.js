import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom" 
import axios from 'axios'; //for data export
import { useState } from "react";
 import {
  Text,
  Flex,
  Box,
  Button,
  Center,
  Input,
  Stack,
} from "@chakra-ui/react";
import { ErrorResponse } from "@remix-run/router";

// <Link as={ReachLink} to="/home">
//   Home
// </Link>;




export default function SignUp() {
  const [name,setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = () => {
if(name.length === 0){
  alert("Name is required");
}
else if(email.length===0){
  alert("Email is required");
}
else if(password.length === 0){
  alert("Password is required");
}
else{
  const url = 'http://localhost:80/database.php';
  let fData = new FormData();
  fData.append('name', name);
  fData.append('email', email);
  fData.append('password', password);
  axios.post(url,fData).then(response=> alert(response.data)).catch(error=> alert(error));
}
};

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
        <Box
          color="#d87e79"
          fontWeight="extrabold"
          fontSize="6xl"
          mt={3}
          paddingRight={1700}
        >
          SignUp
        </Box>
        <Box
          color="#d87e79"
          fontWeight="light"
          fontSize="5xl"
          mt={5}
          paddingTop={30}
          paddingBottom={0}
          paddingRight={900}
        >
          Create account by filling your email and password.
        </Box>
        <Stack>
        <Box
            color="#d87e79"
            fontWeight="light"
            fontSize="2xl"
            mt={40}
            paddingTop={10}
            paddingRight={1800}
          >
            Name
          </Box>
          <Input placeholder="Enter Name" size="lg" name='name' value ={name} onChange={(e) => setName(e.target.value)}/>
          <Box
            color="#d87e79"
            fontWeight="light"
            fontSize="2xl"
            mt={40}
            paddingTop={10}
            paddingRight={1800}
          >
            Email
          </Box>
          <Input placeholder="Enter email" size="lg" name = 'email' value ={email} onChange={(e) => setEmail(e.target.value)} />
          <Box
            color="#d87e79"
            fontWeight="light"
            fontSize="2xl"
            mt={40}
            paddingTop={30}
            paddingRight={1750}
          >
            Password
          </Box>
          <Input placeholder="Enter password" size="lg" name = 'password' value ={password} onChange={(e) => setPassword(e.target.value)}/>
        </Stack>

        <Box paddingTop={300}>
          <Button color="#d87e79" size="lg" height="70px" width="600px">
          <Link to = "/login" name = "submit" id= 'submit'  onClick={handleSubmit} >  Create Account   </Link> 
          </Button>
     
        </Box>
        <Box
          color="#d87e79"
          fontWeight="light"
          fontSize="2xl"
          mt={40}
          paddingBottom={2}
          paddingLeft={1500}
        >
          Already have an account?
          <Link color="messenger.500" href="./login">
            Login
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
