# password-generator
This is a small project where users can generate unique passwords



## Important Snippet of code

```javaScript

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

  const capQuestion = prompt("Would you like capital letters in the password? \n Type: Y or N").toUpperCase()
  const lowerQuestion = prompt("Would you like lower case letters in the password? \n Type: Y or N ").toUpperCase()
  const specialQuestion = prompt("Would you like special charechters in password? \n Type: Y or N").toUpperCase()
```
Simple function that when called upon prompts users on the type of input there password should be
.For example, Users can choose weather or not to have capital letters, special charechters, or lowercase letters

### Picture of working app
[picture of working app](./images/appPic.png)
