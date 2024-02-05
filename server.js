// step 1: create a folder
//step 2: move into that tfolder
//step 3: npm init -y
//step 4: open folder ising VScode

//server instatiate
const express = require ('express');
const app = express();

//activate the server
app.listen(8080 , ()=> {
    console.log("Server started at port no. 3000")
} );

//bodyParser
const bodyParser = require('body-parser');

//specifically used to parse JSON data and add it to rquest body object
app.use(bodyParser.json());
//Routes
app.get('/mitron' , (request, response) => {
    response.send("hello jee kaise ho mitron");
})
app.post('/api/cars' , (request, response) => {
    const{name , brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("car submitted succesfully");
})


const mongoose = require('mongoose');
mongoose.connect('mongo://localhost:27017/myDatabase' , {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {console.log("Connection Successful")})
.catch ( (error) =>{console.log("Recieved an error")});