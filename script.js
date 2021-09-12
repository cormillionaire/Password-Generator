// Assignment Code
var generateBtn = document.querySelector("#generate");

// password criteria prompts: 
let setPasswordCriteria = function () {
  let numberOfChar;
  numberOfChar = window.prompt("Enter the number of characters in your password (range 8 to 128)");
  //number of characters no less than 8 no more than 128
  if (numberOfChar < 8 || numberOfChar > 128) {
    window.alert("You must enter a number between 8 and 128.");
    setPasswordCriteria ();
  } else if (isNaN(numberOfChar)) {
    window.alert("You must enter a number.");
    setPasswordCriteria ();
  }
    // Letting user know they need to select at least one of the next prompts as true/yes
  window.alert("Select at least one of the following prompts. Answer with Y for Yes or N for No.");
}

setPasswordCriteria ();

  let criteriaLower = window.prompt("At least one lowercase letter?(Y/N)");
  criteriaLower = criteriaLower.toUpperCase();
  console.log(criteriaLower);
  if (criteriaLower !=="Y" &&  criteriaLower!=="N") {
    window.alert("Answer with Y for Yes or N for No.");
  } 
  let criteriaUpper = window.prompt("At least one uppercase letter?(Y/N)");
  criteriaUpper = criteriaUpper.toUpperCase();
  console.log(criteriaUpper);
    if (criteriaUpper!=="Y" && criteriaUpper!="N" ) {
    window.alert("Answer with Y for Yes or N for No.");
    } 
  let criteriaNum = window.prompt("At least one number?(Y/N)");
    criteriaNum = criteriaNum.toUpperCase();
    console.log(criteriaNum);
    if (criteriaNum!="Y" && criteriaNum!="N") {
      window.alert("Answer with Y for Yes or N for No.");
      } 
  let criteriaSpecial = window.prompt("At least one special character?(Y/N)");
    criteriaSpecial = criteriaSpecial.toUpperCase();
    console.log(criteriaSpecial);
    if (criteriaSpecial!="Y" && criteriaSpecial!="N" ) {
      window.alert("Answer with Y for Yes or N for No.");
      } else {
          window.alert("You've selected " + criteriaLower + " for Lower " + criteriaUpper + " for Upper " + criteriaNum + " for Number " + criteriaSpecial + "for Special Character");
        }


// validation at least one of each was selected
if (criteriaLower === "N" && criteriaUpper === "N" && criteriaNum === "N" && criteriaSpecial === "N") {
  window.alert("You must select at least one character criteria for your password")
}
// Write password to the #password input
let generatePassword = function () {

}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
