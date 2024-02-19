import bcrypt from 'bcrypt';
const bcrypt = require('bcrypt');

        // Database to store user information (for simplicity, using an object)
        const userDB = {};

        // Function to register a new user
        function registerUser() {
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
        function loginUser() {
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

    //wrapper event handlers
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');
    const wrapperForm = document.querySelector('.wrapper-form');
    const addFeedback = document.querySelector('.add-feedback');



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
   
