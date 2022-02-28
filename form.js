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
        alert ("Username cannot be blank. It must contain at least 6 characters")
        return false;
    } 
    if (usernameValue.length <6){
        return false;
    } else {
        return true;
    }
}

// Validate Email function 
    const emailValidate = () => {
        const emailValue = email.value;
        const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if(emailValue === "")
        alert ("Please enter your email address!")
        return false;
      }
      if(emailValue.match(emailFormat)){
        return true;
      } else {
          alert ("You have entered and invalid email address!")
          return false;
      }
  }

  // Validate Password function 
  const passwordValidate = () => {
      const passwordValue = password.value 
      const passwordFormat = /([ A-Za-z])|(\d)|([*.!@#$%^&(){}:;<>,.?~_+-=])/;

      if(passwordValue === ""){
          alert ("Please enter your password");
          return false;
      }
      if(passwordValue.match(passwordFormat)){
          return true;
      }else {
          alert ("Your password should contain: uppercase, lowercase, number and special character.")
          return false;
      }
  }
  





