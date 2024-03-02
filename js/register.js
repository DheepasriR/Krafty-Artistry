// Custom validation method for future date
$.validator.addMethod("notFutureDate", function(value, element) {
  var today = new Date();
  var selectedDate = new Date(value);
  return selectedDate <= today;
}, "Please select a date not in the future.");



// Function to validate the registration form after it has loaded
$(document).ready(function() {

    // Attaching validation rules to the registration form fields using the jQuery validate plugin
    $("#registration-form").validate({
       
      // Defining the validation rules for each form field
      rules: {
        firstname: {
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
            date: true,
            notFutureDate: true
          },
        phone: {
            digits: true,
            minlength: 10,
            maxlength: 10
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

      // Customized validation error messages for each form field
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
        birthday: {
          date: "Please enter a valid date",
          notFutureDate: "Please select a date not in the future"
        },
        email: {
          required: "Please enter your email address",
          email: "Please enter a valid email id"
        },
        phone: {
          minlength: "Your phone number must be at least 10 digits",
          maxlength: "Your phone number must be at most 10 digits"
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
  

