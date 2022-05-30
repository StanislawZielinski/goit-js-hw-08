const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";
const _= require('lodash');

form.addEventListener("input", saveText);
function saveText(event) {
    event.preventDefault();
    const saveEmail = form.elements.email.value;
    const saveMessage = form.elements.message.value;
    const saveData = {
        email: saveEmail, message: saveMessage,
    };
    localStorage.setItem(`${LOCALSTORAGE_KEY}`, JSON.stringify(saveData)); 
    
};
updateForm();
function updateForm() {
    const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsedData = JSON.parse(savedData) || "";
    const savedEmail = parsedData.email;
    const savedMessage = parsedData.message;
    form.elements.email.value = savedEmail || "";
    form.elements.message.value = savedMessage || "";
}; 

form.addEventListener("submit", send_Clear);
function send_Clear(event) {
    event.preventDefault();
    const saveEmail = form.elements.email.value;
    const saveMessage = form.elements.message.value;
    const saveData = {
        email: saveEmail, message: saveMessage,
    };
    console.log(saveData)
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
};

// let savedMessage;
// message.addEventListener("input", saveMessage);
// function saveMessage(event) {
//     event.preventDefault();
//     const savedMessage = message.value;
//     console.log(savedMessage);
//     return savedMessage;
// };

// const data = {
//     email: `${savedEmail}`,
//     message: `${savedMessage}`,    
// };
// localStorage.setItem("feedback-form-state", JSON.stringify(data));
// const savedData = localStorage.getItem("feedback-form-state");
// const parseSavedData = JSON.parse(savedData);
// console.log(parseSavedData);

