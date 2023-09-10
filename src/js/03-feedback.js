import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refFeedBackForm = document.querySelector('.feedback-form');

const refFeedBackEmail = document.querySelector('.feedback-form input');
const refFeedBackMessage = document.querySelector('.feedback-form textarea');

refFeedBackForm.addEventListener('input', throttle(onListenerFeedback, 500));
refFeedBackForm.addEventListener('submit', onFormSubmit);

function onListenerFeedback(e) {
    e.preventDefault();
    
    const feedbackObj = {
    email: refFeedBackEmail.value,
    message: refFeedBackMessage.value,
};

localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackObj));

};

function onFormSubmit(e) {
    e.preventDefault();
    
    getFeedbackLocalStorage();

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function getFeedbackLocalStorage() {

        const savedFeedback = localStorage.getItem(STORAGE_KEY);
        const parseMessage = JSON.parse(savedFeedback);

        if (parseMessage) {
            
            console.log(parseMessage);
        }
};