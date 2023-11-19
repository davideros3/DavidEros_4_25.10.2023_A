function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const btnSubmit = document.querySelector("btn-submit")
const modalBody = document.querySelector("modal-body")
const form = document.getElementById("form")


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// closing modal form 
close.addEventListener ("click", function() {
  modalbg.style.display = "none";
});




// DOM elements 

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const tournamentAttend = document.getElementById("quantity");
const whereToParticipate = document.querySelectorAll("[type=radio]");
const checkBoxMandatory = document.getElementById("checkbox1");
const submit = document.querySelector(".btn-submit");
const locationOfChampionship = document.getElementById("all-location")
const closingButton = document.querySelector(".btn-closing")



function checkFirstName() {
  // // First validated object is First Name, I set up the a valaidation for at least 2 letter 
  if (firstName.value.length < 2  || firstName === "" ) {
    //if first name invalid red border will apear also the error message 
    firstName.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    // //if firstname is valid green border will apear
    first.parentElement.setAttribute("data-error-visible", "false");
    firstName.classList.add("valid")
    return true;
  }
}


function checkLastName() {
  // Second validated object is Lasst Name, I set up the a valaidation for at least two letter !
  if (lastName.value.length < 2 || lastName.value === "" ) {
    //if last name invalid red border will apear also the error message 
    lastName.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    //if lastname is valid green border will apear
    lastName.parentElement.setAttribute("data-error-visible", "false");
    lastName.classList.add("valid")
    return true;
  }
}

// Third validated object is Email, Correct validation is will be return is na case that the first part of code contain at least
// 4 letter or nummer +@ + 3letter or nummer . 3letter or nummer
function checkEmail() {
const regexEmail = /^[a-z0-9]+([_|\.|-]{4}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{3}[a-z0-9]+)*[\.]{1}[a-z]{3}$/;
  // Checking if the input is matching with a email regex
  if (email.value.match(regexEmail)) {
    // In case the value if email matching with regex it will apear the grenn border
    email.parentElement.setAttribute("data-error-visible", "false");
    email.classList.add("valid")
    return true;
  } else {
    // It will apeat the red border and error message
    email.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
}


//function birthdate
  function checkBirthDate() {
    // Check if birth date has value and if it s a number 
    if (birthDate.value.trim() === "" || isNaN(birthDate.value === true)) {
      // If birttdate is empty or not a number then appear a error message 
      birthDate.parentElement.setAttribute("data-error-visible", "true");
      return false;
    }
    
     else {
        // If birth date is valid appear a grenn border 
        birthDate.parentElement.setAttribute("data-error-visible", "false");
        birthDate.classList.add("valid");
        return true;
      }
    }
  

// Checking the value of attend on tournament, 
function checkTournament() {
  // The value has to be number and greater then zero also it can t empty, When is not so that appear a error message and Red border 
  if (
    tournamentAttend.value === "" || tournamentAttend.value < 0 ) {
    //it appear a green border
    tournamentAttend.parentElement.setAttribute("data-error-visible", "true");
    
    return false;
  } else {
    // //it appear a green border
    tournamentAttend.parentElement.setAttribute("data-error-visible", "false");
    tournamentAttend.classList.add("valid")
    return true;
  }
}

//Valueting  the tournament location value
function checkLocation() {
  //loop all location
  for (let i in whereToParticipate) {
    // The default behavior is showing a error message and red border 
    locationOfChampionship.setAttribute("data-error-visible", "true");
    //in case the one of the radio button chcecked than appear a green border 
    if (whereToParticipate[i].checked) {
      locationOfChampionship.setAttribute("data-error-visible", "false");
      return true;
    }
  }
  return false;
}

//Check box valueting
function checkboxMand() {
  // Checking the value of the checkbox 
  if (checkBoxMandatory.checked === true) {
    //In case the chcekbox is checked appear the green border
    checkBoxMandatory.parentElement.setAttribute("data-error-visible", "false");
    return true;
  } else {
    // checkbox not checked appear a error message 
    checkBoxMandatory.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
}
// Function to perform all field validations
// Call individual validation functions
function allFieldValidation() {
  checkFirstName();
  checkLastName();
  checkEmail();
  checkBirthDate();
  checkTournament();
  checkLocation();
  checkboxMand();
}

// Validation function to check if all fields are valid
function validate() {
  
  if (
    checkFirstName() &&
    checkLastName() &&
    checkEmail() &&
    checkBirthDate() &&
    checkTournament() &&
    checkLocation()&&
    checkboxMand() === true
  ) {
    return true;
  }
  // At least one field is invalid
  return false;
}


// The default behaviour afer submititng is reloading, 
// After submiting appearing the succes message if case everything is true
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validate() === true) {
    showCorectMessage();
    // document.querySelector("form").reset();
  } else {
    //else go back in allFieldValidation
    allFieldValidation();
  }
});






// Function Show correct message  
function showCorectMessage() {
  const body = document.querySelector(".modal-body");

  // The current content of the modal window will be removed 
  body.innerHTML = '';
  //  Creating the thank for your registration content 
  let thankContent = document.createElement("div")
  thankContent.classList.add("thanks-content")
  let thankYouMsg = document.createElement("p");
  thankYouMsg.classList.add("thanks-msg");
  let thanksNote = document.createTextNode("Thank You for Registration");
  thankYouMsg.appendChild(thanksNote);
  thankContent.appendChild(thankYouMsg);
  body.appendChild(thankContent);

  // Creating a close button
  let newBtn = document.createElement("button");
  newBtn.classList.add("btn-closing");
  let newBtnText = document.createTextNode("Close");
  newBtn.appendChild(newBtnText);
  body.appendChild(newBtn);

  // By clicking on close button modal window close !
  newBtn.addEventListener("click", function () {
    modalbg.style.display = "none";
  });

  modalbg.style.display = "block";
}


