<?php 
include 'db_connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header("Content-Type: application/json; charset=UTF-8");

$conn = OpenCon();

$email = $_GET["email"];

$get_user_id_query = "SELECT `user_id` FROM User WHERE email = '".$email."';";
if($result = $conn -> query($get_user_id_query)){
    if($result->num_rows > 0){
      $row = $result->fetch_array();
      $user_id = $row["user_id"];
    }
    else{
      http_response_code(401);
      echo "User " . $email . " does not exist";
    }
}
else{
    http_response_code(500);
    echo "Error: " . $sql . "<br>" . $conn->error;
}

if($user_id){
    $get_recipies = "SELECT `recipe_text` FROM Recipe WHERE user_id = '".$user_id."';";
    if($result = $conn -> query($get_recipies)){
        $output = array();
        while($row = $result->fetch_array()){
            $output[] = $row["recipe_text"];
        }
        echo json_encode($output);
        http_response_code(200);

    }
}

$conn->close();
    
?>