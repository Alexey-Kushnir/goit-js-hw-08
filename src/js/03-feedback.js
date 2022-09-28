import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form  input');
const message = document.querySelector('.feedback-form  textarea');
const STORAGE_KEY = 'feedback-form-state';
let formData = {};
let savedMessage = {};

populateTextarea();
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextInput, 500));

function onFormSubmit(e) {
  e.preventDefault();

  if (!message.value) {
    alert('Поле Message не заполнено');
    return;
  }

  if (!email.value) {
    alert('Поле Email не заполнено');
    return;
  }

  if (savedMessage) {
    console.log(savedMessage);
  } else {
    console.log(formData);
  }

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage) {
    if (savedMessage.email) {
      email.value = savedMessage.email;
    } else {
      email.value = '';
    }

    if (savedMessage.message) {
      message.value = savedMessage.message;
    } else {
      message.value = '';
    }
  }
}
