const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
  const value = input.value.trim();
  output.textContent = value || 'Anonymous';
});
