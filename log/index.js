import bcrypt from 'bcrypt';
const bcrypt = require('bcrypt');
const readline = require('readline');

// Database to store user information (for simplicity, using an object)
const userDB = {};

// Function to register a new user
function registerUser() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter username: ', (username) => {
        if (userDB[username]) {
            console.log('Username already exists. Please choose another one.');
            rl.close();
            return;
        }

        rl.question('Enter password: ', (password) => {
            bcrypt.hash(password, 10, (err, hashedPassword) => {
                if (err) {
                    console.error('Error hashing password:', err);
                    rl.close();
                    return;
                }
                userDB[username] = hashedPassword;
                console.log('User registered successfully.');
                rl.close();
            });
        });
    });
}

// Function to login an existing user
function loginUser() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter username: ', (username) => {
        if (!userDB[username]) {
            console.log('User not found. Please register.');
            rl.close();
            return;
        }

        rl.question('Enter password: ', (password) => {
            bcrypt.compare(password, userDB[username], (err, result) => {
                if (err) {
                    console.error('Error comparing passwords:', err);
                    rl.close();
                    return;
                }

                if (result) {
                    console.log(`Login successful. Welcome back, ${username}!`);
                    displaySecuredPage();
                } else {
                    console.log('Incorrect password. Please try again.');
                }
                rl.close();
            });
        });
    });
}

// Function to display secured page
function displaySecuredPage() {
    console.log('Welcome to the secured page!');
    console.log('This is some sensitive information.');
}

// Main function to handle user input
function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('1. Register');
    console.log('2. Login');
    console.log('3. Exit');

    rl.question('Enter your choice: ', (choice) => {
        switch (choice) {
            case '1':
                registerUser();
                break;
            case '2':
                loginUser();
                break;
            case '3':
                console.log('Exiting...');
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please try again.');
        }
    });
}

// Start the program
main();
