import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textArea: document.querySelector('textarea'),
};

refs.form.addEventListener('input', throttle(onInputValue, 500));
refs.form.addEventListener('submit', onSubmitForm);

function onInputValue() {
  const email = refs.form.elements.email.value;
  const message = refs.form.elements.message.value;

  const inputValue = {
    email: email.trim(),
    message: message.trim(),
  };

  const userInputValue = JSON.stringify(inputValue);
  localStorage.setItem(STORAGE_KEY, userInputValue);
}

function onSubmitForm(event) {
  event.preventDefault();
  const {email, message} = event.currentTarget.elements;

  if ((refs.textArea.value === '' || refs.textArea.value === 0)) {
    alert('Please fill of fields!');
  } else {
    console.log({ email: email.value.trim(), message: message.value.trim() });
  }

 event.currentTarget.reset()
 localStorage.removeItem(STORAGE_KEY)
  
}

function onAutoComplete() {
    const valueOfLocalStorage = localStorage.getItem(STORAGE_KEY)
    const validValueOfLocalStorage = JSON.parse(valueOfLocalStorage)

    if(validValueOfLocalStorage) {
        refs.input.value = validValueOfLocalStorage.email
        refs.textArea.value = validValueOfLocalStorage.message
    }
}


