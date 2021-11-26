//To get all the elements by id
let contactForm = document.getElementById("contact-form");
let user_name = document.getElementById("user_name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let modal = document.getElementById("myModal");
let closeBtn = document.getElementById("closeBtn");
const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn");


//Clear Form function
const clearForm = () => {
    user_name.value = "";
    email.value = "";
    message.value = "";
};

(function() {
    emailjs.init("user_99vg3YcmXzSCVIjuvJ5Wh");
})();


const sendMail = (e) =>{
    e.preventDefault();
    console.log(user_name.value, email.value, message.value)
    let contactParams = {
        user_name : user_name.value,
        user_email: email.value,
        message: message.value
    };
    emailjs.send("service_1q50dc6", "contact-form", contactParams,
    "user_99vg3YcmXzSCVIjuvJ5Wh").then(function(res) {})
    clearForm();
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
