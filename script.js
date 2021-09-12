// Assignment Code
var generateBtn = document.querySelector("#generate");
let numberOfChar;

// Password criteria prompts 
let setPasswordCriteria = function () {
numberOfChar = window.prompt("Enter the number of characters in your password (range 8 to 128)");
//Number of characters no less than 8 no more than 128
if (numberOfChar < 8 || numberOfChar > 128) {
  window.alert("You must enter a number between 8 and 128.");
  setPasswordCriteria();
} else if (isNaN(numberOfChar)) {
  window.alert("You must enter a number.");
  setPasswordCriteria();
}
// Letting user know they need to select at least one of the next prompts as true/yes
window.alert("Select at least one of the following prompts. Answer with Y for Yes or N for No.");
}

setPasswordCriteria();

let criteriaLower = window.prompt("At least one lowercase letter?(Y/N)");
criteriaLower = criteriaLower.toUpperCase();
console.log(criteriaLower);
if (criteriaLower !== "Y" && criteriaLower !== "N") {
  window.alert("Answer with Y for Yes or N for No.");
}
let criteriaUpper = window.prompt("At least one uppercase letter?(Y/N)");
criteriaUpper = criteriaUpper.toUpperCase();
console.log(criteriaUpper);
if (criteriaUpper !== "Y" && criteriaUpper != "N") {
  window.alert("Answer with Y for Yes or N for No.");
}
let criteriaNum = window.prompt("At least one number?(Y/N)");
criteriaNum = criteriaNum.toUpperCase();
console.log(criteriaNum);
if (criteriaNum != "Y" && criteriaNum != "N") {
  window.alert("Answer with Y for Yes or N for No.");
}
let criteriaSpecial = window.prompt("At least one special character?(Y/N)");
criteriaSpecial = criteriaSpecial.toUpperCase();
console.log(criteriaSpecial);
if (criteriaSpecial != "Y" && criteriaSpecial != "N") {
  window.alert("Answer with Y for Yes or N for No.");
} else {
  window.alert("You've selected " + criteriaLower + " for Lower " + criteriaUpper + " for Upper " + criteriaNum + " for Number " + criteriaSpecial + "for Special Character");
}

// validation at least one of each was selected
if (criteriaLower === "N" && criteriaUpper === "N" && criteriaNum === "N" && criteriaSpecial === "N") {
  window.alert("You must select at least one character criteria for your password")
}
console.log("Continue");

// Write password to the #password input
let generateCharacterUpper = function () {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log(generateCharacterUpper());

let generateCharacterLower = function () {
  return generateCharacterUpper().toLowerCase();
}
console.log(generateCharacterLower());

let generateCharacterSpecial = function () {
  const special = "!@#$%^&*"
  return special[Math.floor(Math.random() * special.length)];
}
console.log(generateCharacterSpecial());

let generateCharacterNum = function () {
  const number = "1234567890"
  return number[Math.floor(Math.random() * number.length)];
}
console.log(generateCharacterNum());

let generatePassword = function () {
  //take the number of characters
  let buildPassword = "";
  for (var i = 0; i < numberOfChar; i++) {
    if (criteriaLower === "Y") {
      buildPassword = buildPassword + generateCharacterLower();
    }
    if (criteriaLower === "Y") {
      buildPassword = buildPassword + generateCharacterUpper();
    }
    if (criteriaSpecial === "Y") {
      buildPassword = buildPassword + generateCharacterSpecial();
    }
    if (criteriaNum === "Y") {
      buildPassword = buildPassword + generateCharacterNum();
    }
  }
  return buildPassword.slice(0, numberOfChar);

}

function writePassword() {
  let password = generatePassword();
  console.log(password);
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
