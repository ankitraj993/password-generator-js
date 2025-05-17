# Password Generator

A simple web-based password generator built with Vanilla JavaScript that allows users to create secure passwords with customizable options.

## Features

- Generate passwords between 10-32 characters
- Customize password content with:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Special characters (!@#$%^&*()_+[]{}|;:,.<>?)
- Copy generated password to clipboard with one click

## Usage

1. Open `index.html` in your web browser
2. Select your desired options:
   - Set password length (10-32 characters)
   - Choose character types by checking/unchecking boxes
3. Click "Generate Password" button
4. Copy the generated password using the "Copy" button

## Technical Details

The project consists of:
- `index.html`: Contains the user interface elements
- `index.js`: Handles password generation logic and user interactions

## Error Handling

The generator includes validation for:
- Minimum password length (10 characters)
- Maximum password length (32 characters)
- At least one character type must be selected
- Invalid number input validation

## Browser Support

Requires a modern browser with support for:
- ES6 JavaScript
- Clipboard API
- DOM manipulation