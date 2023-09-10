
const throttle = require('lodash.throttle');

const refFeedBackForm = document.querySelector('.feedback-form');
const refSubmitForm = document.querySelector('.feedback-form button');

refFeedBackForm.addEventListener('input', onListenerFeedback);
refSubmitForm.addEventListener('submit', onFormSubmit);

getFeedbackLocalStorage();

function onListenerFeedback(e) {
    
    const refFeedBackEmail = document.querySelector('.feedback-form input');
    const refFeedBackMessage = document.querySelector('.feedback-form textarea');
    
    const feedbackObj = {
    email: refFeedBackEmail.value,
    message: refFeedBackMessage.value,
};

localStorage.setItem("feedback-form-state", JSON.stringify(feedbackObj));

};

function onFormSubmit(e) {
    e.preventDefault();
    
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    
};

function getFeedbackLocalStorage() {

        const savedFeedback = localStorage.getItem("feedback-form-state");
        const parseMessage = JSON.parse(savedFeedback);

        if (parseMessage) {
            console.log(parseMessage);
        }
};