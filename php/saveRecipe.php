<?php 
include 'db_connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$conn = OpenCon();

$email = $_POST['email'];
$recipe = $_POST['recipe'];

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
    echo "Error: " . $sql . "<br>" . $conn->error;
}

if($user_id){
    $insert_recipe = "INSERT INTO Recipe(user_id, recipe_text) VALUES('$user_id', '$recipe');";
    if($result = $conn -> query($insert_recipe) === True) {
        http_response_code(200);
        echo "New record created successfully";
    }
    else{
        echo "Error: " . $insert_recipe . "<br>" . $conn->error;
    }
}

$conn->close();
    
?>