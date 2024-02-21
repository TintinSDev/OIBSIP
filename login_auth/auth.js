import bcrypt from 'bcryptjs';
bcrypt = require('bcrypt');

// Database to store user information (for simplicity, using an object)node -v

const userDB = {};

// Function to register a new user
function registerUser(e) {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err);
            return;
        }
        userDB[username] = { email, password: hashedPassword };
        console.log('User registered successfully.');
    });
}

// Function to login an existing user
function loginUser(e) {
    e.preventDefault
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

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
