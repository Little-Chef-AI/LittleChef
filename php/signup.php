<?php 
include 'db_connection.php';

header('Access-Control-Allow-Origin: http://127.0.0.1:3000');
header("Access-Control-Allow-Header: access");
header('Access-Control-Allow-Methods: POST');
header("Content-Type: application/json; charset=UTF-8");

$conn = OpenCon();

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "INSERT INTO User(email,password) VALUES('$email','$password');";
if($result = $conn -> query($sql) === True) {

    $output = array (
        'email'=>$email,
    );
    header('HTTP/1.1 201 Created');
    echo json_encode($output);

    
} else if (mysqli_errno($conn) == 1062) {
    $output = array (
        'message' => "The email: " . $email . " already has an account"
    );
    header('HTTP/1.1 409 Conflict');
    echo json_encode($output);
}
else{
    $output = array (
        'message' => "Error: " . $sql . "<br>" . $conn->error
    );
    header('HTTP/1.1 500 Internal Server Error');
    echo json_encode($output);
}
$conn->close();
    
?>