const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();
require("dotenv").config();




app.use(cors())

var witheList = ['http://localhost:3000']
var corsOptions = {
  origin: function(origin,callcack) {
    if(witheList.indexOF(origin)===-1){
    callcack(null, true);
  }else{
  callcack(new Error('not allowed by cors'))
  }
  }}






const {mongoose} = require('./database');

//config
app.set('port', process.env.Port || 4000 );
//midelwares
app.use(morgan('dev'));
app.use(express.json());





//routes
app.use('/usuarios' ,require('./routes/Routes'))

//static files

app.use(express.static(path.join(__dirname,'public')))
//start server
app.listen (app.get('port'), () =>{
    console.log(`Servidor en puerto ${app.get('port')}`);
});