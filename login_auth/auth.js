const bcrypt = require('bcryptjs');

// Database to store user information (for simplicity, using an object)
const userDB = {};

// Function to register a new user
function registerUser(req, res) {
    const { username, email, password } = req.body;

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err);
            res.status(500).send('Internal server error');
            return;
        }
        userDB[username] = { email, password: hashedPassword };
        console.log('User registered successfully.');
        res.status(200).send('User registered successfully.');
    });
}

// Function to login an existing user
function loginUser(req, res) {
    const { email, password } = req.body;

    for (const user in userDB) {
        if (userDB[user].email === email) {
            bcrypt.compare(password, userDB[user].password, (err, result) => {
                if (err) {
                    console.error('Error comparing passwords:', err);
                    res.status(500).send('Internal server error');
                    return;
                }

                if (result) {
                    console.log(`Login successful. Welcome back, ${user}!`);
                    res.status(200).send(`Login successful. Welcome back, ${user}!`);
                } else {
                    console.log('Incorrect password. Please try again.');
                    res.status(401).send('Incorrect password. Please try again.');
                }
            });
            return;
        }
    }
    console.log('User not found. Please register.');
    res.status(404).send('User not found. Please register.');
}

// Function to display secured page
function displaySecuredPage(req, res) {
    res.status(200).send('Welcome to the secured page!\nThis is some sensitive information.');
}

module.exports = {
    registerUser,
    loginUser,
    displaySecuredPage
};
