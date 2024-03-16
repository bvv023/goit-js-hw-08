const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleLogin);

function handleLogin(event) {
  event.preventDefault();

  const formData = {};
  const formElements = loginForm.elements;

  for (const element of formElements) {
    if (element.type === 'submit') continue;

    const value = element.value.trim();
    if (!value) {
      alert('All form fields must be filled in!');
      return;
    }

    formData[element.name] = value;
  }

  console.log(formData);

  loginForm.reset();
}

