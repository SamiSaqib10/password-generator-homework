// Assignment Code
//accessing the generate password button with queryselector
var generateBtn = document.querySelector("#generate");
//added a eventlistener on click of the generate password button
generateBtn.addEventListener("click", writePassword);

//declared Strings variable
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()_+~\`|}{[]:;?><./-=";

//created an empty array
var optionsSelected = [];
//converted the strings to arrays
var low = lowerCase.split("");
var up = upperCase.split("");
var num = numbers.split("");
var char = specialChar.split("");



// Write password function
function writePassword() {
  //created a password variable and calling generate password function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//updating the html content using queryselector
  passwordText.value = password;

}

//created a generate password function
function generatePassword() {
  var input = parseInt(window.prompt("Please select password length between 8 and 128"));
  if (!input) {
    window.alert("Please enter a valid number")
    return generatePassword();
  } else if (input < 7 || input > 129) {
    window.alert("Please enter a valid number")
    return generatePassword();
  } else {
    var optionLow = window.confirm("Do you want Lower-Case Alphabets?");
    var optionUp = window.confirm("Do you want Upper-Case Alphabets?");
    var optionNum = window.confirm("Do you want Numbers ?");
    var optionChar = window.confirm("Do you want Special Characters ?");
  }
  if (!optionLow && !optionUp && !optionChar && !optionNum) {
    window.alert("Please make a valid Choice")
    return generatePassword();
  }
  if (optionLow) {
    optionsSelected = low;
  }
  if (optionUp) {
    optionsSelected = up;
  }
  if (optionNum) {
    optionsSelected = num
  }
  if (optionChar) {
    optionsSelected = char
  }
  if (optionLow && optionUp) {
    optionsSelected = low.concat(up);
  }
  if (optionLow && optionNum) {
    optionsSelected = low.concat(num);
  }
  if (optionLow && optionChar) {
    optionsSelected = low.concat(char);
  }
  if (optionUp && optionNum) {
    optionsSelected = up.concat(num);
  }
  if (optionUp && optionChar) {
    optionsSelected = up.concat(char);
  }
  if (optionChar && optionNum) {
    optionsSelected = char.concat(num);
  }
  if (optionLow && optionNum && optionChar) {
    optionsSelected = low.concat(num, char);
  }
  if (optionLow && optionUp && optionNum) {
    optionsSelected = low.concat(up).concat(num);
  }
  if (optionLow && optionUp && optionChar) {
    optionsSelected = low.concat(up, char);
    // console.log(optionsSelected);
  }
  if (optionUp && optionNum && optionChar) {
    optionsSelected = up.concat(num, char);
    // console.log(optionsSelected);
  }
  if (optionUp && optionLow && optionNum && optionChar) {
    optionsSelected = up.concat(low, num, char);
    // console.log(optionsSelected);
  }
  //created an empty array
  var pass = [];
  //genrated a for loopequal to the length(no between 8 to 128 )
  for (var i = 0; i <= input; i++) {
//created a math floor math random function
    pass.push(optionsSelected[Math.floor(Math.random() * optionsSelected.length)]);
  }
  //converting the array to string
  return pass.join('');
}

