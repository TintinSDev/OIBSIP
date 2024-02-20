import bcrypt from 'bcrypt';

// Database to store user information (for simplicity, using an object)
const userDB = {};

// Selecting DOM elements
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Event listeners for popup functionality
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Function to register a new user
function registerUser() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Check if the username already exists
    if (userDB[username]) {
        console.log('Username already exists. Please choose a different username.');
        return;
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err);
            return;
        }
        // Store the user information securely
        userDB[username] = { email, password: hashedPassword };
        console.log('User registered successfully.');
    });
}

// Function to login an existing user
function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Check if the user exists
    for (const user in userDB) {
        if (userDB[user].email === email) {
            bcrypt.compare(password, userDB[user].password, (err, result) => {
                if (err) {
                    console.error('Error comparing passwords:', err);
                    return;
                }

                if (result) {
                    console.log(`Login successful. Welcome back, ${user}!`);
                    displaySecuredPage();
                } else {
                    console.log('Incorrect password. Please try again.');
                }
            });
            return;
        }
    }
    console.log('User not found. Please register.');
}

// Function to display secured page
function displaySecuredPage() {
    console.log('Welcome to the secured page!');
    console.log('This is some sensitive information.');
}

// Example usage:
// You would need to attach these functions to your HTML elements as event listeners
// For example, for registration, you would attach registerUser() function to a button click event
// For login, you would attach loginUser() function to a button click event
