//To get all the elements by id 
let contactForm = document.getElementById("contactForm");
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let modal = document.getElementById("myModal");
let closeBtn = document.getElementById("closeBtn");
const submitBtn = document.getElementById("submitBtn")
const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");

//Clear Form function
const clearForm = () => {
    name.value = "";
    email.value = "";
    message.value = "";
}
//save the user details and message to session storage
const saveMessage = (e) => {
  //prevent the default action of the form
  e.preventDefault();

  //Storing the data from the input fields to new variables
  const name1 = name.value;
  const email1 = email.value;
  const message1 = message.value;

  //Creating a new object
  const msgObj = { name1, email1, message1 };
  //console.log(msgObj);

  //Creating an empty array for messages to append and dispaly
  let msgArray = [];

  //Check if there are any exsisting messages
  if (window.sessionStorage.getItem("messages")) {
    msgArray = JSON.parse(window.sessionStorage.getItem("messages"));
   // console.log(msgArray);
  }
  msgArray.push(msgObj);
  window.sessionStorage.setItem("messages", JSON.stringify(msgArray));
  //Display Modal
  displayModal();
  //Call the display message function
  displayMessage();
  clearForm();
}
//Display modal function
const displayModal = () =>{
  modal.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//When the user clicks on close button, close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
  form.reset();
}
//Display messages
const displayMessage = () =>{
    //alert("I was called")
    let msgArray = [];
    //Check if there are any exsisting messages
    if (window.sessionStorage.getItem("messages")) {
      msgArray = JSON.parse(window.sessionStorage.getItem("messages"));
    }
    let msgItems = [];
    for(let i=0; i < msgArray.length; i++){
       let msg = "";
       const currentMsg = msgArray[i];
       msg += `<div class="card">
                <dt>${currentMsg.name1}: ${currentMsg.email1}</dt>
                <dd>Message:${currentMsg.message1}</dd>
            </div>`;

         msgItems.push(msg);
    }
    let msgList = document.getElementById("messages");
    //console.log(msgList);
    msgItems.forEach(msg =>{
      //console.log(msg);
      msgList.innerHTML = msgItems.join("");
    })    
}
//function for deleting the messages
const deleteMessage = () =>{
  //alert("I was called");
  //Check if there are any exsisting messages
  if (window.sessionStorage.getItem("messages")) {
    window.sessionStorage.removeItem("messages");
  }
  //page refresh
 location.reload();
}
//Call the display function
displayMessage();

//When the clear button is clicked, the deleteMessage function is triggered
deleteBtn.addEventListener("click",deleteMessage);

//When the clear button is clicked, the clearForm function is triggered
clearBtn.addEventListener("click",clearForm);

//When the Submit button is clicked, the saveMessage function is triggered
contactForm.addEventListener("submit", saveMessage);



