<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Header: access");
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  header("Content-Type: application/json; charset=UTF-8");
  header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers,Authorization, X-Requested-With');

  
  $con = mysqli_connect("localhost", "root","","chef_login");
  mysqli_select_db($con, "react-chef_login");

  $data = json_decode(file_get_contents("php://input"));

  $email = $data -> email;
  $password = $data -> password;

  $result = mysqli_query($con, "SELECT * FROM users where email = '".$email. "' AND password = '".$password."'");

  $nums = mysqli_num_rows($result);
  $rs = mysqli_fetch_array($result);

  if($nums >=1){

    http_response_code(200);
    $outp = "";

    $outp .= '{"email":"' .$rs["email"] . '", ';
    $outp .= '"name":"' .$rs["name"] . '",';
    $outp .= '"Status":"200"}';

    echo $outp;
  }else{
    http_response_code(202);
  }
?>
