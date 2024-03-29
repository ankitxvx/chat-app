const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('./model/user');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const socketSetup = require('./socket');

// const { Server } = require("socket.io");
 
dotenv.config();
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true });

const bcryptSalt = bcrypt.genSaltSync(10);
 
const app = express();
 
app.use(express.json());
app.use(cookieParser());  
 
 
app.use(
  cors({
    credentials: true,
    origin:'http://localhost:5173'
  })
);

// Test route
app.get('/test', (req, res) => {
  res.json('test ok');
});

app.get('/profile', (req, res) => {
  const token = req.cookies?.token;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, userData) => {
      if (err) throw err;
      res.json({ userData });
    });
  } else {
    res.status(401).json('no token');
  }
});

// Register route with async/await and error handling
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
    const createdUser = await User.create({
      username: username,
      password: hashedPassword,
    });
    jwt.sign({ userId: createdUser._id, username }, process.env.JWT_SECRET, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token, { sameSite: 'none', secure: true }).status(201).json({
        id: createdUser._id,
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json('error');
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await User.findOne({ username });
   if(foundUser){
    const passOk =  bcrypt.compareSync(password,foundUser.password);
    if(passOk){
      jwt.sign({userId:foundUser._id,username}, process.env.JWT_SECRET, {}, (err, token) => {
        res.cookie('token', token, {sameSite:'none', secure:true}).json({
          id: foundUser._id,
        });
      });
    }
   }
});


socketSetup();

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


 