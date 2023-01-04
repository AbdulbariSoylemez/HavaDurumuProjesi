import express from 'express';
import dotenv from 'dotenv';
import conn from'./db.js';
import pagerouter from './routes/pageRoute.js'
import newsrouter from './routes/newsRoute.js'
import lrouter from './routes/lastRoute.js'




// mongoDB connect
dotenv.config();
conn();

// config express
const app = express();
const port = 4000;

// template engine set
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))
app.use(express.json());

//routes
app.use('/',pagerouter);
app.use('/news',newsrouter);
app.use('/data',lrouter);




//port listen
app.listen(port, ()=>{
    console.log("App running port:",port);
});


