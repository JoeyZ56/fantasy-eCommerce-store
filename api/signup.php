<?php
// validate data
if(empty($_POST["name"])) {
    die("Name is required");
}

// Validate Email
if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    die("Email is required");
}

// Validate Password
// Password must be at least 6 characters
if (strlen($_POST["password"]) < 3) {
    die("Password must be at least 3 characters");
}
// Password must contain a 1 letter
if (!preg_match("/[a-z]/i", $_POST["password"])) {
    die("Password must contain a letter");
}
// Password must contain a number
if (!preg_match("/[0-9]/", $_POST["password"])) {
    die("Password must contain a number");
}

// Validate Confirm Password
if ($_POST["password"] !== $_POST["password_confirmation"]) {
    die("Password and Confirm Password must match");
}

//Hash Password MANDITORY!!!!
$password_hash = password_hash($_POST["password"], PASSWORD_DEFAULT);

//gets the database connection
$mysqli = require __DIR__ . "/database.php";

//insert statement to avoid and sql injection attack
$sql = "INSERT INTO user (name, email, password_hash)
VALUES (?, ?, ?)"; // are placeholders for data that will be escaped

//prepare statement
$stmt = $mysqli->stmt_init();

//prepare statement for execution
if (! $stmt->prepare($sql)) { //any syntax errors will be caught by the if statement
    die("SQL error: " . $stmt->error);
} 

//bind parameters to statement
$stmt->bind_param("sss", //s = string, i = integer, d = double, b = blob
                $_POST["name"], 
                $_POST["email"], 
                $password_hash);

//execute statement
if ($stmt->execute()) {
    header('Location: signup-success.html'); //redirect to success page
    exit; //stop executing code on this page "best practice"
} else if ($stmt->errno == 1062) {
    echo("Email already exists");
} else {
        die($mysqli->error . "" . $mysqli->errno);
    }
    




?>
