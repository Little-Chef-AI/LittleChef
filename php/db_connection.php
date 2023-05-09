<?php
function OpenCon() {
    $dbhost = "127.0.0.1:3307";
    $dbuser = "group7user";
    $dbpass = "acZZ#47#Hw";
    $db = "group7db";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    
    

    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        http_response_code(500);
        exit();
    }

    return $conn;
}
     
function CloseCon($conn) {
    $conn -> close();
}
       
?>