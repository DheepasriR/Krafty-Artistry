
<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['email'])) {
    // Redirect the user to the login page or handle the error as needed
    header('Location: login.php');
    exit;
}

$id = $_SESSION['email'];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration";

// Establish the database connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the new password from the form
    $newPassword = $_POST['new-password'];

    // Hash the new password
    $hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);

    // Update the user's password in the database
    $sql = "UPDATE users SET password='$hashedPassword' WHERE email='$id'";

    if (mysqli_query($conn, $sql)) {
        // Password updated successfully
        // You can redirect the user to a success page or show a success message
        header('Location: ../php/userDetails.php');
        exit;
    } else {
        echo "Error updating password: " . mysqli_error($conn);
    }
}

// Close the database connection
mysqli_close($conn);
?>
