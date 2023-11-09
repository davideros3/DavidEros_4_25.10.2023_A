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
const tournamentAttend = docuemnt.getElementById("quantity");
const whereToParticipate = document.querySelectorAll("type=radio");
const checkBoxMandatory = document.getElementById("checkbox1");
const submit = document.querySelector("btn-submit");


 //Function Validation by clicking on submit button
function validate() {
  // The aim of this function is to validate all input and return Thank You !
  // First thing first, We set up a variable to true
  let isCorect = true;
  // First validated object is First Name, I set up the a valaidation for at least four letter !
  const resultFirstName = firstName.value.trim();

  if(resultFirstName.lenght > 4) {
    isCorect = false;

  }

  else {
    isCorect = true;

  }
  // Second validated object is Lasst Name, I set up the a valaidation for at least four letter !
  const resultLastName = lastName.value.trim();

  if(resultLaststName.lenght > 4) {
    isCorect = false;

  }

  else {
    isCorect = true;

  }
  // Third validated object is Email, Correct validation is will be return is na case that the first part of code contain at least
  // 4 letter or nummer +@ + 3letter or nummer . 3letter or nummer
  const resultEmail = email.value.trim();
  const regexEmail = /^[a-z0-9]+([_|\.|-]{4}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{3}[a-z0-9]+)*[\.]{1}[a-z]{3}$/;
  if(resultEmail == "") {
    isCorect = false;
  }
  else if (regexEmail.exec(resultEmail) == null) {
    isSuccessful = false;}

  else {
    isCorect = true;
  }

   
};


// Function to post a Correct message 
function showCorectMessage(){
  const body =  document.querySelector("modal-body")
  //Creating a new div with content 
  let newMsg = document.createElement("div");
  newMsg.classList.add("thanks-content");
  // creating a paragrapf
  let thankYouMsg = document.createElement("p");
  thankYouMsg.classList.add("thanks-msg");
  let thanksNote = document.createTextNode("Thank You for Registering")
  body.appendChild("newMsg");
  newMsg.appendChild("thankYouMsg");
  thankYouMsg.appendChild("thanksNote");
  //Create a button
  let newBtn = document.createElement("button");
  newBtn.classList.add("btn-submit");
  let newBtnText = document.createTextNode("Close");
  newBtn.appendChild("newBtnText");
  body.appendChild("newBtn")
  // By clicking on Close button the modal window close
  newBtn.addEventListener("click", function(){
    modalbg.style.display ="none"
  })

}
