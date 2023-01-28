#   Fullstack with chatGPT

learn - **"[The Complete ChatGPT Web Development Code Along - Javascript](https://www.udemy.com/course/the-complete-chatgpt-web-development-full-stack-javascript)"**

## Set up dependencies, environment and scripts etc :

  - Create a `.gitignore` file executing `npx gitignore node`
  - Create a `package.json` file executing `npm init --y`
  - Install express `npm install express`


## setup Express Server
-   `api/server.js`  
```
const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send('Welcome to my game app!');
})

app.listen(3000, ()=> {
    console.log('Server listening on port 3000');
})
``` 
##  Establish a Connection to MongoDB with The Express Server ChatGPT

- Install mongoose - `npm i mongoose`

```
const uri = "copy the url from your MongoDB to here";

async function connect(){
    try {
        await mongoose.connect(uri, {
            useNewURLParser: true, 
            useUnifiedTopology: true
        });
        console.log('connected to mongoDB');
    } catch (error) {
        console.error(error);
    }
}

connect();
```

- Create A Model Schema with Mongoose Using ChatGPT Examples

```
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
```
## Set Up And Install React Client Side and Go Through Boilerplate

-   create react app

```
npm install react react-dom
sudo npm install -g create-react-app
 create-react-app my-app
```

##  Use The Axios Library into The MongoDB Database By Analyzing ChatGPT

-   install axios
```
npm i axios
```
