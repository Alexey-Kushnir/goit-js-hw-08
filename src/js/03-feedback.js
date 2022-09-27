import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const message = document.querySelector('.feedback-form  textarea');
const email = document.querySelector('.feedback-form  input');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

// a@df.rt
populateTextarea();
form.addEventListener('submit', onFormSubmit);
message.addEventListener('input', throttle(onTextAreainput, 500));

email.addEventListener('input', e => {
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  formData[e.target.name] = e.target.value;
  console.log(formData);
});

function onFormSubmit(e) {
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(STORAGE_KEY);
  e.preventDefault();
}

function onTextAreainput(e) {
  const text = e.target.value;
  localStorage.setItem(STORAGE_KEY, text);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    message.value = savedMessage;
  }
}
