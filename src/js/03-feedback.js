import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refFeedBackForm = document.querySelector('.feedback-form');

FormData = {};

refFeedBackForm.addEventListener('input', throttle(onListenerFeedback, 500));
refFeedBackForm.addEventListener('submit', onFormSubmit);

getSavedMessageForFeedback();

function onListenerFeedback(e) {

    e.preventDefault();
    FormData[e.target.name] = e.target.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(FormData));

};

function onFormSubmit(e) {
    e.preventDefault();
    getConsolePrintStorage();

    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
};



function getConsolePrintStorage() {

    const savedFeedback = localStorage.getItem(STORAGE_KEY);
    const parseMessage = JSON.parse(savedFeedback);

    if (parseMessage) {
        console.log(parseMessage);
    
    };
};

function getSavedMessageForFeedback() {

    const savedFeedback = localStorage.getItem(STORAGE_KEY);
    const parseMessage = JSON.parse(savedFeedback);
    
    if (parseMessage) {
        document.querySelector('input[name="email"]').value = parseMessage.email;
        document.querySelector('textarea[name="message"]').value = parseMessage.message;
    };
};

