<?php
  include 'db_connection.php';
  session_start();

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Header: access");
  header('Access-Control-Allow-Methods: POST');


  $conn = OpenCon();

  $email = $_POST['email'];
  $password = $_POST['password'];

  $sql = "SELECT `user_id`, `email` FROM User WHERE email = '".$email."' AND password = '".$password."';";
  if($result = $conn -> query($sql)){
    if($result->num_rows > 0){

      $row = $result->fetch_array();
      $output = array (
        'user_id'=>$row["user_id"],
        'email'=>$row["email"],
        'Status'=>200,
      );
      $_SESSION["email"] = $email;
      header('HTTP/1.1 200 Created');
      echo json_encode($output);
    }
    else{
      $output = array (
        'message' => "No account found with that Email and Password"
      );
      header('HTTP/1.1 401 Unauthorized');
      echo json_encode($output);
    }
  }
  else{
    $output = array (
      'message' => "Error: " . $sql . "<br>" . $conn->error
    );
    header('HTTP/1.1 500 Internal Server Error');
    echo json_encode($output);
  }

  CloseCon($conn);

?>