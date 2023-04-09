const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const initStorage = require('../init/storage');
const {engine} = require('express-handlebars');
const router = require('../config/router');


module.exports = async (app)=>{
    
    app.use(cors());
    app.engine('handlebars', engine());
    app.set('view engine', 'handlebars');
    app.set('views', './views');
    app.use(express.static('public'));
    app.use(cookieParser());
    
    
    app.use(await initStorage());
    app.use(router);
}