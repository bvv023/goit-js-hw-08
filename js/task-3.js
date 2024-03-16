const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', updateName);

function updateName() {
  const name = nameInput.value.trim();
  if (!name) {
    nameOutput.textContent = 'Anonymous';
    return;
  }

  nameOutput.textContent = ` ${name}!`;
}
