// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t'];
  const capital = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S'];
  const specialChar = ['!','"','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','{','|','}','~'];

  //Depending on how the user answers question the arrays
  //above will be included as subarrays
  const includeChar = [];

  //User created password
  const userPassword = [];
  
//How long will the question be
  let passwordLength = prompt("How long would you like the password to be? \n" +
    "Password must be between 8 to 120 charechters")
//Check if user inputted is between 128 and 8
  if(parseInt(passwordLength > 128 )|| parseInt(passwordLength) < 8){
      alert('Password must be between minimum of 8 to a max of 120 charechters')
  }

  const capQuestion = prompt("Would you like capital letters in the password? \n Type: Y or N")
  const lowerQuestion = prompt("Would you like lower case letters in the password? \n Type: Y or N ")
  const specialQuestion = prompt("Would you like special charechters in password? Type: Y or N")

  if(capQuestion === 'Y'){
    includeChar.push(capital)
  }
  if(lowerQuestion === "Y"){
    includeChar.push(lower)
  }
  if( specialQuestion == "Y"){
    includeChar.push(specialChar)
  }

  while(userPassword.length < passwordLength){
    let lengthOfarray = includeChar.length;
    let randomIndex = Math.floor(Math.random() * lengthOfarray);
    let chooseIndex = includeChar[randomIndex];
    let subIndex = chooseIndex[Math.floor(Math.random() * chooseIndex.length)]
    userPassword.push(subIndex);

  }
  return userPassword.join(' ')
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
