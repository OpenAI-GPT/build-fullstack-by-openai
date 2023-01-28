const express = require('express');
const app = express();
const mongoose = require('mongoose');

const uri = "mongodb+srv://1234567890:1234567890@cluster0.dhy8fo9.mongodb.net/?retryWrites=true&w=majority";

async function connect(){
    try {
        await mongoose.connect(uri, {
            useNewURLParser: true, 
            useUnifiedTopology: true
        });
        console.log('connected to monoDB');
    } catch (error) {
        console.error(error);
    }
}

connect();

const userSchema = new mongoose.Schema({
    username: String,
    passsword: String,
})

const User = mongoose.model('User', userSchema);

const user = new User({
    username: 'jack',
    password: '12345'
})

user.save((error) => {
    if (error) throw error;
    console.log("New user has been saved to the database successfully");
})


app.get('/', (req, res)=> {
    res.send('Welcome to my game app!');
})

app.listen(3000, ()=> {
    console.log('Server listening on port 3000');
})