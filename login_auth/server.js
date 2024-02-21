// Import required modules
const express = require('express');
const { registerUser, loginUser, displaySecuredPage } = require('./auth');

// Create an instance of the Express application
const app = express();

// Set up middleware to parse incoming request bodies
app.use(urlencoded({ extended: true }));
app.use(json());

// Create a router for handling user-related routes
const userRouter = Router();

// Define routes for registration, login, and secured page on the user router
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/secured-page', displaySecuredPage);

// Mount the user router on the main application
app.use(userRouter);

// Start the Express server
const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
