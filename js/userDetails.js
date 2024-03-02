// user profile update form validations
$(document).ready(function() {
  $("#form-profile").validate({
    // Adding rule for the different form fields
      rules: {
        'first-name': {
        required: true,
        minlength: 2
      },
      lastname: {
        required: true,
        minlength: 2
      },
      username: {
        required: true,
        minlength: 4
      },
      email: {
          required: true,
          email: true
        },
      birthday: {
          date: true
        },
      phone: {
          digits: true,
      },
      password: {
        required: true,
        minlength: 8
      },
      confirmPassword: {
        required: true,
        equalTo: "#password"
      }
    },
    // Defining error messages
    messages: {
      firstname: {
        required: "Please enter your first name",
        minlength: "Your first name must be at least 2 characters long"
      },
      lastname: {
        required: "Please enter your last name",
        minlength: "Your last name must be at least 2 characters long"
      },
      username: {
        required: "Please enter an username",
        minlength: "Your username must be at least 4 characters long"
      },
      email: {
        required: "Please enter your email address",
        
      },
      password: {
        required: "Please enter a password",
        minlength: "Your password must be at least 8 characters long with atleast one uppercase, one lowercase and one digit "
      },
      confirmPassword: {
        required: "Please confirm your password",
        equalTo: "Your passwords do not match"
      }
    }
  });
});



