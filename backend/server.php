<?php
    header("Access-Control-Allow-Origin: *"); // allow cross-origin requests
    header("Access-Control-Allow-Methods:POST");
    header("Access-Control-Allow-Headers:access");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Acess-Control-Allow-Headers,Authorization, X-Requested-With"); // allow JSON requests
    
    $db = mysqli_connect('localhost', 'root', '', 'signup'); // connect to the MySQL database

    if (!$db) {
        die('Error connecting to database.'); // stop the script if there's an error
    }

    $data = json_decode(file_get_contents('php://input'), true); // parse the JSON request body
    
    $name = $data['name'];
    $email = $data['email'];
    $password = $data['password'];
    $con = mysqli_connect("localhost:8001","root","","");
    $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";

    if(mysqli_query($db, $sql)){
        echo "New record created successfully"; // if the query is successful, send a success message
    } else{
        echo "Error: " . $sql . "<br>" . mysqli_error($db); // if the query fails, send an error message
    }

    mysqli_close($db); // close the database connection
?>
