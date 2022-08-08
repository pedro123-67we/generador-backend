
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
  const uri = process.env.URI
  const PORT = process.env.PORT
//config

app.set('PORT', process.env.PORT || 4000 );
//midelwares
app.use(morgan('dev'));
app.use(express.json());





//routes
app.use('/usuarios' ,require('./routes/Routes'))

//static files

app.use(express.static(path.join(__dirname,'public')))
//start server
app.listen (app.get('PORT'), () =>{
    console.log(`Servidor en puerto ${app.get('PORT')}`);
});