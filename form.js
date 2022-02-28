const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener("submit", e => {
    e.preventDefault();
        validateUsername();
        emailValidate();
        passwordValidate();
})

// Validate Username function 
const validateUsername = () => {
    const usernameValue = username.value;
    
    if(usernameValue === ""){ 
        username.style.border = "2px solid red";
        alert ("Username cannot be blank. It must contain at least 6 characters")
        return false;
    } 
    if (usernameValue.length <6){
        username.style.border = "1px solid red";
        return false;
    } else {
        username.style.border = "2px solid green";
        return true;
    }
}

// Validate Email function 
    const emailValidate = () => {
        const emailValue = email.value;
        const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if(emailValue === "") {
        email.style.border = "2px solid red";
        alert ("Please enter your email address!")
        return false;
      }
      if(emailValue.match(emailFormat)){
        email.style.border = "2px solid green";
        return true;
      } else {
            email.style.border = "2px solid red";
          alert ("You have entered and invalid email address!")
          return false;
      }
  }

  // Validate Password function 
  const passwordValidate = () => {
      const passwordValue = password.value 
      const passwordFormat = /([ A-Za-z])|(\d)|([*.!@#$%^&(){}:;<>,.?~_+-=])/;

      if(passwordValue === ""){
          password.style.border = "2px solid red";
          alert ("Please enter your password");
          return false;
      }
      if(passwordValue.match(passwordFormat)){
          password.style.border = "2px solid green";
          return true;
      }else {
          password.style.border = "2px solid red";
          alert ("Your password should contain: uppercase, lowercase, number and special character.")
          return false;
      }
  }
  





