const password = document.querySelector('#password');
const submit = document.querySelector('#submit');

submit.addEventListener("click", (e) => {
    e.preventDefault();
    validatePassword(password.value)
})

const checkLength = (password) => {
    if(password.length < 6) {
        console.log("Password is too short")
        return false;
    } else if(password.length > 24) {
        console.log("Password is too long")
        return false;
    }
    return true;
}

const checkUpperCaseLetter = (password) => {
    const reg = /([A-Z]{1,})/i;
    if(!reg.test(password)) {
        console.log("Password dont have uppercase letter")
        return false;
    }
    return true;
}  

const checkLowerCaseLetter = (password) => {
    const reg = /([a-z]{1,})/i;
    if(!reg.test(password)) {
        console.log("Password dont have lower case letter")
        return false;
    }
    return true;
}  

const validatePassword = (value) => {
   const check = checkLength(value) && checkUpperCaseLetter(value) && checkLowerCaseLetter(value);

   if(check) {
       console.log("Ok")
   }
}
