// import { EventEmitter } from 'events';

import express from 'express'
const app = express();
const PORT = 8000;

import path from "path";
import fs, { rmSync } from "fs";

import { addAbortSignal } from 'stream';

const __dirname =path.resolve()
app.use(express.urlencoded());

const fn =__dirname +"/userList.csv";


app.get("/", (req, res)=>{
    console.log("you hit the server", __dirname);
   const data=req.query;
   console.log(data);
res.sendFile(__dirname + "/src/regForm.html");
});


app.post("/", (req,res)=>{
    const {email, password} = req.body;
    const datastr =`${email}, ${password} \n`;
    console.log(datastr);

    fs.appendFile(fn, datastr, (error)=>{
    error && console.log(error)
    console.log("cheeck the file")
    });

    res.send(`<h1>form received</h1>
    <p> <a href ="/login">login now</a></p>
    `);
});

app.get("/login", (req, res)=>{
res.sendFile(__dirname + "/src/loginForm.html");
});


app.post("/login", (req, res)=>{
    const {email, password} = req.body;
 // read the file and chekc if the combimation to email and password exist 
 fs.readFile(fn, (error, data) =>{
    error && console.log(error);

    const userList = data.toString();
    const userArg = userList.split("\n");
    userArg.includes(datastr)

    ? res.send("loged in ")
    : res.send("Invalid login in info; ");


 });
   
    });

app.listen(PORT, (error)=> {
    error 
    ? console.log(error)
    :console.log(`your server ruing at http://localhost:${PORT}`);
});



