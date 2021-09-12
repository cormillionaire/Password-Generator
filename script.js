// Assignment Code
var generateBtn = document.querySelector("#generate");
let numberOfChar;
let criteriaLower;
let criteriaUpper;
let criteriaNum;
let criteriaSpecial;

// Password criteria prompts 
let setPasswordCriteria = function () {
  numberOfChar = window.prompt("Enter the number of characters in your password (range 8 to 128)");
  // Number of characters no less than 8 no more than 128
  if (numberOfChar < 8 || numberOfChar > 128) {
    window.alert("You must enter a number between 8 and 128.");
  } else if (isNaN(numberOfChar)) {
    window.alert("You must enter a number.");
  }
  // Letting user know they need to select at least one of the next prompts as true/yes
  window.alert("Select at least one of the following prompts. Answer with Y for Yes or N for No.");
}

// Character types with  felixbility in answer y or Y for 'Yes' and n or N for 'No'
let setPasswordCharType = function () {
  criteriaLower = window.prompt("At least one lowercase letter?(Y/N)");
  criteriaLower = criteriaLower.toUpperCase();
  console.log(criteriaLower);
  if (criteriaLower !== "Y" && criteriaLower !== "N") {
    window.alert("Answer with Y for Yes or N for No.");
  }
  criteriaUpper = window.prompt("At least one uppercase letter?(Y/N)");
  criteriaUpper = criteriaUpper.toUpperCase();
  console.log(criteriaUpper);
  if (criteriaUpper !== "Y" && criteriaUpper != "N") {
    window.alert("Answer with Y for Yes or N for No.");
  }
  criteriaNum = window.prompt("At least one number?(Y/N)");
  criteriaNum = criteriaNum.toUpperCase();
  console.log(criteriaNum);
  if (criteriaNum != "Y" && criteriaNum != "N") {
    window.alert("Answer with Y for Yes or N for No.");
  }
  criteriaSpecial = window.prompt("At least one special character?(Y/N)");
  criteriaSpecial = criteriaSpecial.toUpperCase();
  console.log(criteriaSpecial);
  if (criteriaSpecial != "Y" && criteriaSpecial != "N") {
    window.alert("Answer with Y for Yes or N for No.");
  } else {
    window.alert("You've selected " + criteriaLower + " for Lower " + criteriaUpper + " for Upper " + criteriaNum + " for Number " + criteriaSpecial + "for Special Character");
  }
  // Validation at least one of these was selected
  if (criteriaLower === "N" && criteriaUpper === "N" && criteriaNum === "N" && criteriaSpecial === "N") {
    window.alert("You must select at least one character criteria for your password")
  }
}

// Generate character based on criteria
let generateCharacterUpper = function () {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log(generateCharacterUpper());

let generateCharacterLower = function () {
  return generateCharacterUpper().toLowerCase();
}
console.log(generateCharacterLower());

let generateCharacterSpecial = function () {
  const special = "!@#$%^&*";
  return special[Math.floor(Math.random() * special.length)];
}
console.log(generateCharacterSpecial());

let generateCharacterNum = function () {
  const number = "1234567890";
  return number[Math.floor(Math.random() * number.length)];
}
console.log(generateCharacterNum());

// Write password 
let generatePassword = function () {
  console.log("You've selected " + criteriaLower + " for Lower; " + criteriaUpper + " for Upper; " + criteriaNum + " for Number; " + criteriaSpecial + " for Special Character")
  // Take the number of characters
  let buildPassword = "";
  // Loop through each of the character types, adding relevant characters until numberOfChar reached or slightly passed
  for (var i = 0; i < numberOfChar; i++) {
    if (criteriaLower === "Y") {
      buildPassword = buildPassword + generateCharacterLower();
    }
    if (criteriaUpper === "Y") {
      buildPassword = buildPassword + generateCharacterUpper();
    }
    if (criteriaSpecial === "Y") {
      buildPassword = buildPassword + generateCharacterSpecial();
    }
    if (criteriaNum === "Y") {
      buildPassword = buildPassword + generateCharacterNum();
    }
  }
  // Make sure to trim down the password to correct size and set buildpwd to the trimmed down pwd
  buildPassword = buildPassword.slice(0, numberOfChar);
  console.log(buildPassword);
  // set the jumblePassword var to ""
  let jumblePassword = "";
  // start a for loop to loop through the length of buildpwd
  for (var i = 0; i < numberOfChar; i++) {
    let buildPasswordIndex = Math.floor(Math.random() * buildPassword.length);
    jumblePassword = jumblePassword + buildPassword[buildPasswordIndex];
    // To make sure the character isnt repeated when randomly picking out the value
    // To make sure the array selection stays within the correct range, need this statement
    if (buildPassword.length === buildPasswordIndex) {
      buildPassword = buildPassword.slice(0, buildPasswordIndex)
      // This works for everything else by triming and keeping what is before and what is after what was pulled by the index.
    } else {
      buildPassword = buildPassword.slice(0, buildPasswordIndex) + buildPassword.slice(buildPasswordIndex + 1, buildPassword.length)
    }
    console.log("bp: " + buildPassword);
    console.log("jum: " + jumblePassword);
  }

  return jumblePassword;
}

// Write password to the #password input
function writePassword() {
  setPasswordCriteria();
  setPasswordCharType();
  let password = generatePassword();
  console.log(password);
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
