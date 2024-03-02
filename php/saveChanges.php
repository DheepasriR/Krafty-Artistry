
<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start(); // Start the session

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration";

// Connecting to the database
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Proceeding if the connection is successful or show the error message
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


// On form submission request
if ($_SERVER["REQUEST_METHOD"] === "POST" ) {
   
    $id = $_SESSION['email'];  // Retrieve the user email from the session
    $firstname = $_POST['first-name'];
    $lastname = $_POST['last-name'];
    $phone = $_POST['phone'];
    $birthday = $_POST['birthday'];
    $residence = $_POST['residence'];
    $gender = $_POST['gender'];

    // Update the user details in the database
    $sql = "UPDATE users SET firstname='$firstname', lastname='$lastname', phone='$phone', birthday='$birthday', residence='$residence', gender='$gender' WHERE email='$id'";
    
    if (mysqli_query($conn, $sql)) {
        // Details updated successfully
        // Redirect the user back to the user detail form with the user ID in the URL
        header('location: ../php/userDetails.php');
        exit;
    } else {
        echo mysqli_error($conn);
    }
} 

// Closing the database connection
mysqli_close($conn);
?>
