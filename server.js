const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const { restart } = require('nodemon');

const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json({ extended: false}));

const dbUrl = require('./config/keys').mongoURI;

//const dbUrl = 'mongodb+srv://brad:Home5656!@place-mern.9dhm1.mongodb.net/react-node?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log("MongoDB is connected");
    } catch (error) {
        console.log(error);
    }
}
//connect DB
connectDB();

app.post("/api/register", async(req, res) => {
    try {
        await User.create({
            name: req.body.userName,
            email: req.body.userEmail
        });
        res.json({
        message: 'User Registered'
    })
    } catch (error) {
        console.log(error)
        res.json({
        message: 'Email Already Exists'
    })
    }

    
})

app.get("/api/users", async(req, res) => {
    try {
        const users = await User.find();

        res.json({
            users: users
        })
    } catch (error) {
        console.log(error)
    }
})


const Port = 5000;

app.listen( Port, () => {
    console.log("Server running on Port " + Port);
})