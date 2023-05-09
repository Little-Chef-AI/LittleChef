<?php 
include 'db_connection.php';

$conn = OpenCon();

$create_user_table = "
    CREATE TABLE `User` (
        `user_id` INT NOT NULL AUTO_INCREMENT,
        `email` VARCHAR(255) NOT NULL UNIQUE,
        `password` VARCHAR(255) NOT NULL,
        PRIMARY KEY (`user_id`),
        CONSTRAINT unique_email UNIQUE (email)
    ) ENGINE=InnoDB;
";

$create_recipe_table = "
    CREATE TABLE `Recipe` (
        `recipe_id` INT NOT NULL AUTO_INCREMENT,
        `user_id` INT NOT NULL,
        `recipe_text` VARCHAR(2500) NOT NULL,
        PRIMARY KEY (`recipe_id`),
        FOREIGN KEY (user_id) REFERENCES User(user_id)
    ) ENGINE=InnoDB;
";

if($result = $conn -> query($create_user_table) === True) {
    echo "User Table Created\n";
} else{
    echo "Error: " . $create_user_table . "<br>" . $conn->error;
}

if($result = $conn -> query($create_recipe_table) === True) {
    echo "Recipe Table Created\n";
} else{
    echo "Error: " . $create_recipe_table . "<br>" . $conn->error;
}

$conn->close();
    
?>