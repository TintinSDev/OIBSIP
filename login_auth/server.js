// server.js
const express = require('express');
const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handle POST request for user registration
app.post('/register', (req, res) => {
    // Process the registration form data here
    console.log('Received registration form data:', req.body);
    // Respond with success or error message
    res.send('Registration successful!');
});

// Handle POST request for user login
app.post('/login', (req, res) => {
    // Process the login form data here
    console.log('Received login form data:', req.body);
    // Respond with success or error message
    res.send('Login successful!');
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
