function finishForm() {
  const inputForm = document.createElement('input');
  inputForm.type = 'text';
  inputForm.name = 'login';
  document.querySelector('.login-form').prepend(inputForm);
  document.querySelector('.login-form').lastElementChild.setAttribute('type', 'password');
}
finishForm();
