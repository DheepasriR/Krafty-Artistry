
<?php

// Define database connection variables
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
  // Get form data and sanitize it
  $firstname = mysqli_real_escape_string($conn, $_POST["firstname"]);
  $lastname = mysqli_real_escape_string($conn, $_POST["lastname"]);
  $birthday = mysqli_real_escape_string($conn, $_POST["birthday"]);
  $gender = mysqli_real_escape_string($conn, $_POST["gender"]);
  $phone = mysqli_real_escape_string($conn, $_POST["phone"]);
  $residence = mysqli_real_escape_string($conn, $_POST["residence"]);
  $email = mysqli_real_escape_string($conn, $_POST["email"]);
  $username = mysqli_real_escape_string($conn, $_POST["username"]);
  $password = mysqli_real_escape_string($conn, $_POST["password"]);
  
  // Hash the password using bcrypt
  $hashed_password = password_hash($password, PASSWORD_BCRYPT);
  
  // Prepare the SQL query to insert the data into the database
  $sql = "INSERT INTO users (firstname, lastname, birthday, gender, phone, residence, email, username, password)
          VALUES ('$firstname', '$lastname', '$birthday', '$gender', '$phone', '$residence', '$email', '$username', '$hashed_password')";
  
  // Execute the query and check for errors
  if (mysqli_query($conn, $sql)) {
    echo "Data added to database successfully. <a href='../html/login.html'>Click here to login</a>";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
  
}

// Close the database connection
mysqli_close($conn);

?>