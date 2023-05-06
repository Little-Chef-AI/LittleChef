<?php
session_start();

include("connection.php");
include("authentication.php");

$user_data = check_login($con);
?>