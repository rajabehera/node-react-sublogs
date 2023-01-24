
require("dotenv").config();


const express = require("express");
const cors = require('cors');
const fs = require('fs')
const path = require('path');

const app = express();
// var corsOptions = {
//     //  origin: "http://192.168.1.131/"
//         origin: "http://localhost:3000/"
//   };
  
  //app.use(cors());
  app.use(cors({
    origin: 'http://192.168.1.131:5000'
}));
const userRouter = require("./api/users/user.router");
const newsRouter = require("./api/news/news.router");



app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/news", newsRouter);

app.use(  express.static(path.join(__dirname, '/public')));


const port =  5000;



app.listen(port, () =>{
    console.log("Server up and running on PORT: ", port);
}); 