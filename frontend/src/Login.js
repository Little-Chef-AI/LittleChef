
import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom" 
import axios from "axios";
import {
  Text,
  Flex,
  Box,
  Button,
  Center,
  Input,
  Stack,
} from "@chakra-ui/react";
//import { Link as ReachLink } from "@reach/router";

// <Link as={ReachLink} to="/home">
//   Home
// </Link>;

// const handleSubmit = async (e) => {
//   e.preventDefault();
// };


export default function Login() {
  const [user, setUser] = useState({email:'', password: ''}) 
  let navigate = useNavigate();
const handleChange = (e) => {
  setUser({...user, [e.target.name]: e.target.value})
}

const submitForm = (e) => {
  e.preventDefault();
  const sendData = {
    email: user.email,
    password: user.password
  }

  //console.log(sendData);

  axios.post('http://localhost:80/authenticate.php',sendData).then((result) => {
    
      if (result.data.Status === '200') { 
          window.localStorage.setItem('email', result.data.email);
          window.localStorage.setItem('name', (result.data.name));  
          navigate(`/Home`);
      }
  else  {
     //props.history.push('/Dashboard')  
     //props.history.push('/Dashboard') Redirect
     
     alert('Invalid User'); 
  }
})  
}
  // const handleSubmit = () => {
  //   if(email.length===0){
  //     alert("Email is required");
  //   }
  //   else if(password.length === 0){
  //     alert("Password is required");
  //   }
  //   else{
  //     const url = 'http://localhost:80/authenticate.php ';
  //     let fData = new FormData();
  //     fData.append('email', email);
  //     fData.append('password', password);
  //     axios.post(url,fData).then(response=> alert(response.data)).catch(error=> alert(error));

      // axios.post(url,fData).then(response=> {
      //   if (response.data === 'Success!') {
      //     alert("Login successful!");
      //     // redirect to home page
      //   } else {
      //     alert("Invalid email or password.");
      //   }
      // }).catch(error=> alert(error));
    

  return (
    <form onSubmit ={submitForm}>
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
          Login
        </Box>
        <Box
          color="#d87e79"
          fontWeight="light"
          fontSize="5xl"
          mt={5}
          paddingTop={30}
          paddingBottom={0}
          paddingRight={1070}
        >
          Enter your email and password to login.
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
            Email
          </Box>
          <Input placeholder="Enter email" size="lg" name ='email' onChange={handleChange} value = {user.email}/>
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
            <Input placeholder="Enter password" size="lg" name="password" type="password" onChange={handleChange} value = {user.password} />
        </Stack>
        <Box paddingTop={300}>
          <Button color="#d87e79" size="lg" height="70px" width="600px" type = "submit" name = "submit" value = "Login!">
          {/* <Link to = "/home" name = "submit" id= 'submit'  onClick={handleSubmit} >Login   </Link>  */}
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
          Don't have an account?
          <Link color="messenger.500" href="./signup">
            Create an Account
          </Link>
        </Box>
      </Flex>
    </div>
    
    // <div className="home">
    //   <h1>Welcome to Little Chef</h1>
    //    <button type="submit" className="GetStartedButton" >
    //     Get Started <a href="./welcome"></a>
    //   </button>
    // </div>
    </form>
  );
}


// const Welcome = () => {
//     return(
//         <div className = "welcome">
//                 <h2>Hello, Welcome to Little Chef. How may I help you?</h2>
//                 <p> List the ingredients you have in your fridge that you would like to cook with.</p>
//                 <p className="question"> Question</p>
//                 <button type="submit" className = 'GetSumbitButton' onClick={handleSubmit}>Sumbit <a href="./login"></a></button>
//         </div>
//     );
// }

// export default Welcome;
