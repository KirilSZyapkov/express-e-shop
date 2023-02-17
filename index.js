const express = require('express');
const app = express();
const dataBase = require('./config/dataBase');
require('dotenv').config();
const bodyParser = require('body-parser');
const expresConfig = require('./config/expressConfig');
const port = 3000;

app.get("*", (req, res, next)=> {
  if(typeof req.session === "undefined"){ 
    req.session = {};
  }
  next();
})



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
start();

async function start() {
  
  await dataBase(app);
  await expresConfig(app);

  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
  });
}
