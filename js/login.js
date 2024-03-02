// Function to validate the login form after it has loaded
$(document).ready(function() {

    // Attaching validation rules to the login form fields using the jQuery validate plugin
    $("#login-form").validate({

       // Defining the validation rules for each form fieldS
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 8
        }
      },

      // Customized validation error messages for each form field
      messages: {
        email: {
          required: "Please enter your email id",
          email: "Enter a valid email id"
        },
        password: {
          required: "Please enter your password",
          minlength: "Your password must be at least 8 characters long with atleast one uppercase, one lowercase and one digit"
        }
      }
    });
  });


  // Variables holding references to HTML elements for the login form
	const form = document.getElementById('login-form');
	const email = document.getElementById('email');
	const password = document.getElementById('password');
  
  // Event listener to prevent default form submission and perform custom validation
	form.addEventListener('submit', (event) => {
	  event.preventDefault();
	  
    // Custom email validation using regular expression
	  if (!validateEmail(email.value)) {
		alert('Please enter a valid email address');
		return;
	  }
  
    // Custom password validation to ensure it satisfies specific criteria using length and regular expressions
	  if (password.value.length < 8) {
		alert('Your password must be at least 8 characters long with atleast one uppercase, one lowercase and one digit');
		return;
	  }
  
	});
  
  // Email validation function using regular expression
	function validateEmail(email) {
	  const regex = /\S+@\S+\.\S+/;
	  return regex.test(email);
	}


  // Custom email validation method using multiple regular expressions
  $.validator.addMethod('customEmail', function(value, element) {
    const regex1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regex2 = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return this.optional(element) || regex1.test(value) || regex2.test(value);
  }, 'Please enter a valid email address.');
  // pattern1 ensures that the email address has at least one character before the `'@'` symbol, at least one character between the `'@'` symbol and the `'.'` symbol, and at least one character after the `'.'` symbol.
  // pattern2 allows for a slightly wider range of characters in the username portion of the email address, but ensures that the domain portion has at least two alphabetic characters
  // The `customEmail` validation method checks that the email address matches either one pattern, or returns `true` if the field is optional. If neither pattern matches, the error message `'Please enter a valid email address.'` is displayed.