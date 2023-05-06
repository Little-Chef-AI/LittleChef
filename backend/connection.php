<?php

$dbhost = "localhost";
$dbemail = "email";
$dbpassword = "password";
$dbname = "chef_login";

$conn = mysqli_connect($dbhost, $dbemail, $dbpassword);

if(!$con)
{
	die("failed to connect!". mysqli_connect_error());
}
echo "Connection established";

?>