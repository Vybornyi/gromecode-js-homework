const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');
const isRequired = value => {
  if (value) {
    return undefined;
  }
  return 'required';
};
const isEmail = value => {
  if (value.includes('@')) {
    return undefined;
  }
  return 'Should be an Email';
};

const validatorByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
};
const validate = (fieldName, value) => {
  const validators = validatorByField[fieldName];
  return validators
    .map(el => el(value))
    .filter(errorText => errorText)
    .join(' ');
};

const onEmailChange = event => {
  const errorText = validate('email', event.target.value);
  emailErrorElem.textContent = errorText;
};
const onPasswordChange = event => {
  const errorText = validate('password', event.target.value);
  passwordErrorElem.textContent = errorText;
};
emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();
  const formData = [...new FormData(formElem)].reduce((acc, [field, value]) => ({
    ...acc,
    [field]: value,
  }));
  alert(JSON.stringify(formData));
};
formElem.addEventListener('submit', onFormSubmit);

// более простой формат считывания формы - ВАРИАНТ 2:
// const formData = Object.fromEntries(new FormData(formElem));
