const express = require('express');
const userRouter = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { createUser, loginUser, getUser } = require('../controllers/userController');

userRouter.post('/register', createUser);

userRouter.post('/login', loginUser);

userRouter.get('/', authMiddleware, getUser);

module.exports = userRouter;
