const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;


const MONGODB_URI = 'mongodb+srv://vy:123@cluster0.un1pm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI || 'mongodb://localhost/todolist', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

// http logger but is not needed
app.use(morgan('tiny'));

app.listen(PORT, console.log(`Server is starting at ${PORT}`));

