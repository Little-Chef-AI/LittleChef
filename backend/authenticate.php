<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');

  $conn = new mysqli("localhost","root","","chef_login");
  function check_login($con) {

	if(isset($_SESSION['user_id'])) {
		$id = $_SESSION['user_id'];
		$query = "select * from users where user_id = '$id' limit 1";

		$result = mysqli_query($con,$query);
		if($result && mysqli_num_rows($result) > 0) {
			$user_data = mysqli_fetch_assoc($result);
			return $user_data;
		}
	}

	header("Location: Home.js");
	die;

}

  if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
  } else {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // query the database to check if the user credentials are valid
    $query = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {
      // authentication successful
      echo "Authentication successful!";
    } else {
      // authentication failed
      echo "Authentication failed!";
    }

    $conn->close();
  }
?>
