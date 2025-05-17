function init() {
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  const form = document.querySelector('#passwordForm');
  const generateBtn = document.querySelector('#generate');

  const copyBtn = document.querySelector('#copyBtn');

  function checkErrors(
    length,
    useUpperCase,
    useLowerCase,
    useNumbers,
    useSpecialChars
  ) {
    // Check if at least one character type is selected
    if (!useUpperCase && !useLowerCase && !useNumbers && !useSpecialChars) {
      return 'Please select at least one character type.';
    }
    // Check if length is a number, example: 10e
    if (isNaN(length)) {
      return 'Password length must be a number.';
    }
    // Check if length is valid
    if (length < 10 || length > 32) {
      console.log(length);
      return 'Password length must be a number between 10 and 32.';
    }
  }

  function generatePassword() {
    // declare variables here because values can change
    const lengthInput = document.querySelector('#length');
    const upperCaseInput = document.querySelector('#uppercase');
    const lowerCaseInput = document.querySelector('#lowercase');
    const numbersInput = document.querySelector('#numbers');
    const specialCharsInput = document.querySelector('#symbols');

    const length = parseInt(lengthInput.value);
    const useUpperCase = upperCaseInput.checked;
    const useLowerCase = lowerCaseInput.checked;
    const useNumbers = numbersInput.checked;
    const useSpecialChars = specialCharsInput.checked;

    const errorMsg = checkErrors(
      length,
      useUpperCase,
      useLowerCase,
      useNumbers,
      useSpecialChars
    );
    if (errorMsg) {
      alert(errorMsg);
      return;
    }

    let passwordChars = '';
    if (useUpperCase) {
      passwordChars += upperChars;
    }
    if (useLowerCase) {
      passwordChars += lowerChars;
    }
    if (useNumbers) {
      passwordChars += numbers;
    }
    if (useSpecialChars) {
      passwordChars += specialChars;
    }
    let password = '';
    for (let i = 0; i < length; i++) {
      // Generate a random index to select a character from the passwordChars string
      const randomIndex = Math.floor(Math.random() * passwordChars.length);
      password += passwordChars[randomIndex];
    }
    // Display the generated password

    const resultContainer = document.querySelector('#resultContainer');
    resultContainer.style.display = 'block';
    const passwordDisplay = document.querySelector('#passwordResult');
    passwordDisplay.value = password;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    generatePassword();
  });
  // Add event listener to the generate button
  generateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    generatePassword();
  });

  // Add event listener to the copy button
  copyBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const passwordDisplay = document.querySelector('#passwordResult');
    // Use Clipboard API to copy text
    navigator.clipboard
      .writeText(passwordDisplay.value)
      .then(() => {
        alert('Password copied to clipboard!');
      })
      .catch((err) => {
        alert('Failed to copy password: ' + err);
      });
  });
}

document.addEventListener('DOMContentLoaded', init);
