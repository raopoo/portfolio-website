//To get all the elements by id
let contactForm = document.getElementById("contact-form");
let user_name = document.getElementById("user_name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let modal = document.getElementById("myModal");
let closeBtn = document.getElementById("closeBtn");
const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn");
// const deleteBtn = document.getElementById("deleteBtn");

//Clear Form function
const clearForm = () => {
    name.value = "";
    email.value = "";
    message.value = "";
};

(function() {
    emailjs.init("user_99vg3YcmXzSCVIjuvJ5Wh");
})();


// window.onload = function() {
//   document.getElementById('contact-form').addEventListener('submit', function(event) {
//       event.preventDefault();
//       displayModal();
//       clearForm();
//       // generate a five digit number for the contact_number variable
//       this.contact_number.value = Math.random() * 100000 | 0;
//       // these IDs from the previous steps
//       emailjs.sendForm('contact_service', 'contact_form', this)
//           .then(function() {
//               console.log('SUCCESS!');
//           }, function(error) {
//               console.log('FAILED...', error);
//           });
//   });
// }

const sendMail = (e) =>{
    e.preventDefault();
    console.log(name.value, email.value, message.value)
    let contactParams = {
        user_name : user_name.value,
        user_email: email.value,
        message: message.value
    };
    emailjs.send("service_1q50dc6", "contact-form", contactParams,
    "user_99vg3YcmXzSCVIjuvJ5Wh").then(function(res) {})
    console.log(contactParams);
}

//Display modal function
const displayModal = () => {
    modal.style.display = "block";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//When the user clicks on close button, close the modal
closeBtn.onclick = function () {
    modal.style.display = "none";
    contactForm.reset();
};

   
//When the clear button is clicked, the clearForm function is triggered
clearBtn.addEventListener("click", clearForm);

//When the Submit button is clicked, the saveMessage function is triggered
contactForm.addEventListener("submit", sendMail);
