// import { EventEmitter } from 'events';

import express from 'express'
const app = express();
const PORT = 8000;

// const eventEmmiter = new EventEmitter();



app.get("/", (req, res)=>{
    console.log("you hit the server");
// res.send("<h1>Abishkar Rai</h1>");

// eventEmmiter.emit("heyEvent");
});

app.listen(PORT, (error)=> {
    error 
    ? console.log(error)
    :console.log(`your server ruing at http://localhost:${PORT}`);
});



