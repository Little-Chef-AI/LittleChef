<?php 
    header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
     
    $conn = new mysqli("localhost","root","","chef_login");
     
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        $sql = "INSERT INTO users(name,email,password) VALUES('$name','$email','$password');";
        $res = mysqli_query($conn, $sql);
         
        if($res){
            echo "Success!";
            echo json_encode($response);
        }
        else{
            echo "Error!";
            echo json_encode($response);

        }
        $conn->close();
    }
?>