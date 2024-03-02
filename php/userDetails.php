
<?php

require("../php/saveChanges.php");

// Start the session
// session_start();

$id = $_SESSION['email'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration";

// connecting to the database
$conn = mysqli_connect($servername, $username, $password, $dbname);

// proceeding if the connection is successful or show the error message
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}


$sql = "SELECT * FROM users WHERE email = '$id'";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {

  // getting the user data from the first row of the result
  $row = mysqli_fetch_assoc($result);

  $username = $row['username'];
  $firstname = $row['firstname'];
  $lastname = $row['lastname'];
  $birthday = $row['birthday'];
  $gender = $row['gender'];
  $phone = $row['phone'];
  $email = $row['email'];
  $residence = $row['residence'];

}

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Account</title>
  <link rel="stylesheet" type="text/css" href="../css/userDetails.css">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/additional-methods.min.js"></script>
    <link rel="stylesheet" type="text/css" href="../css/nav.css">
    <link rel="stylesheet" type="text/css" href="../css/homepage.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.7/css/all.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="../js/nav.js"></script>
    <script src="../js/homepage.js"></script>
</head>

<body>
  <script src="../js/userDetails.js"></script>
  <script>
    $(document).ready(function () {
      console.log("hello inside::::::::")

      const birthdayInput = document.getElementById('birthday');

      // Function to set the max attribute of the input field to the current date
      function updateMaxDate() {
        const today = new Date("2015-12-31").toISOString().split('T')[0];
        birthdayInput.setAttribute('max', today);
      }

      // Set the initial max date when the page loads
      updateMaxDate();

      // Update max date whenever the user interacts with the input field
      birthdayInput.addEventListener('input', updateMaxDate);
    })
  </script>

  <script>


    function editprofile() {
      // Enable editable fields
      var editableFields = document.querySelectorAll('.editable');
      editableFields.forEach(function (field) {
        field.disabled = false;
      });
      document.getElementById("save-changes-btn").style.display = ''
    }

    function saveChanges() {
      console.log("inside function");
      // Disable editable fields
      var editableFields = document.querySelectorAll('.editable');
      editableFields.forEach(function (field) {
        field.disabled = true;
      });

    }
  </script>
  <!--Navbar HTML-->
  <nav class="first-nav">
    <div class="navbar navbar-primary">
        <a href="../html/homepage.html" class="logo">
            <img src="../media/images/logo.png" alt="Krafty Artistry Logo" class="logo">
            Krafty Artistry
          </a>
      <form class="search-form">
        <input type="text" placeholder="Search..." class="search-bar" id="search-bar">
        <button type="submit" class="search-button" id="searchButton">
            <i class="fas fa-search"></i>
        </button>
      </form>
      <a href="../php/userDetails.php" class="user-greeting"><i class="fas fa-user"></i></a>
      <a href="../html/productGallery.html" class="product-gallery" title="Product gallery"><i class="fas fa-images"></i></a>
      <a href="../html/aboutus.html" class="about-us"><i class="fas fa-info-circle"></i></a>
      <a href="../php/logout.php" class="logout-icon"><i class="fas fa-sign-out-alt"></i></a>
    </div>
  </nav>

  <div class="container">
    <div class="nav-sidebar">
      <nav>

        <img src="../media/images/demo1.png" alt="">
        <h3>
          <?php echo $username ?>
        </h3>

      </nav>
    </div>
    <div class="content-section">
      <div class="form-section" id="profile-section">
        <h2>Account Details</h2>
        <form id="form-profile" method="post" action="../php/saveChanges.php" onSubmit>
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" value=<?php echo $username ?> disabled>

            <div class="form-group">
              <label for="first-name">First Name:</label>
              <input type="text" id="first-name" name="first-name" value=<?php echo $firstname ?> class="editable"
                required disabled>
            </div>
            <div class="form-group">
              <label for="last-name">Last Name:</label>
              <input type="text" id="last-name" name="last-name" title="Please enter Valid Last Name." value=<?php echo $lastname ?> class="editable" required disabled>
            </div>
            <div class="form-group">
              <label for="email">E-mail:</label>
              <input type="email" id="email" name="email" title="Please enter Valid Email." value=<?php echo $email ?> disabled>
            </div>
            <div class="form-group">
              <label for="birthday">birthday:</label>
              <input type="date" id="birthday" name="birthday" title="" max="2024-01-01" value=<?php echo $birthday ?>
                class="editable" required disabled>
            </div>
            <div class="form-group">
              <label for="phone">phone:</label>
              <input type="tel" id="phone" accept="number" pattern="[0-9]{10}"
                title="Please enter a 10-digit mobile number" minlength="10" name="phone" value=<?php echo $phone ?>
                class="editable" required disabled>
            </div>
            <div class="form-group">
              <label for="residence">Residence:</label>
              <input type="text" id="residence" name="residence" value=<?php echo $residence ?> class="editable"
                required disabled>
            </div>
            <div class="form-group">
              <label for="gender">Gender:</label>
              <select id="gender" name="gender" class="editable" required disabled>
                <option value="male" <?php echo $gender == "male" ? "selected" : '' ?>>Male</option>
                <option value="female" <?php echo $gender == "female" ? "selected" : '' ?>>Female</option>
                <option value="other" <?php echo $gender == "other" ? "selected" : '' ?>>Other</option>
              </select>
            </div>

            <div class="edit-profile-btn-container">

              <button type="button" id="edit-profile-btn" onclick="editprofile()">Edit Profile</button>

              <button type="submit" id="save-changes-btn" style="display:none">Save Changes</button>

            </div>
        </form>
      </div>

      <div class="form-section" id="password-section">
        <h2>Change Password</h2>
        <form id="form-password" action="../php/updatePassword.php" onsubmit="return validatePassword()" method="post">
          <div class="form-group">
            <label for="current-password">Current Password:</label>
            <input type="password" id="current-password" name="current-password" required>
          </div>
          <div class="form-group">
            <label for="new-password">New Password:</label>
            <input type="password" id="new-password" name="new-password"
              pattern="(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,}"
              title="New password must be at least 8 characters long and contain at least one letter, one number, and one special character."
              required>
          </div>
          <div class="form-group">
            <label for="confirm-password">Confirm New Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" required>
          </div>


          <button type="submit">Change Password</button>

        </form>

      </div>
    </div>
  </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <link rel="stylesheet" type="text/js" href="../js/userDetails.js">

  <!--Footer-->
  <footer class="footer">
    <div class="footer-cont">
      <div class="row">
        <div>
          <a href="./homepage.html" class="footer-logo">
            <img src="../media/images/logo.png" alt="Krafty Artistry Logo">
          </a>
        </div>
        <div class="col-md-6">
          <h4>About Us</h4>
          <span>Curating Exceptional Handcrafted Artistry</span>
        </div>
        <div class="col-md-3">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h4>Follow Us</h4>
          <ul class="footer-social">
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-12" style="margin-top: 15px;">
            <p style="margin: 0px;">&copy; 2023 Your Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</body>

</html>