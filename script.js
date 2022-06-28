// Assignment code here
function generatePassword() {
  var criteria = {
    lowercase: false,
   uppercase: false,
   numbers: false,
   specialCharacters: false,
   length: 0
  }

 if (confirm("Use lowercase characters?")) {
      criteria.lowercase = true;
 }
 else {
   criteria.lowercase = false;
 }
 if (confirm("Use uppercase characters?")) {
  criteria.uppercase = true;
}
else {
  criteria.uppercase = false;
}

 if (confirm("Use numbers?")) {
  criteria.numbers = true;
}
else {
  criteria.numbers = false;
}
 if (confirm("Use special characters?")) {
  criteria.specialCharacters = true;
}
else {
  criteria.specialCharacters = false;

 }

 if (criteria.lowercase == false && criteria.uppercase == false && criteria.numbers == false && criteria.specialCharacters ==false) {
   return "You must select at least one criteria.  Please try again.";
 }
 criteria.length = prompt("How long will your password be?");
 criteria.length = Math.max(8, criteria.length);
 criteria.length = Math.min(128, criteria.length);

 var results = "";
 var characters = {
   lowercase: "abcdefghijklmnopqrstuvwxyz",
   uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
   numbers: "1234567890",
   specialCharacters: "!@#$%&*",
 }
var allowedCharacters = ""
console.log(criteria);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
