const password = prompt("Enter your password");

if (password.indexOf(' ')=== -1 && password.length>= 6) {
    console.log("Good Password")
} else {
    console.log("Bad Password")
}