const express = require('express');
const morgan = require('morgan');
const path = require('path')
const app = express();

const {mongoose} = require('./database');

//config
app.set('port', process.env.Port || 3000 );
//midelwares
app.use(morgan('dev'));
app.use(express.json());


//routes
app.use('/generador-cv/cv' ,require('./routes/Routes'))

//static files

app.use(express.static(path.join(__dirname,'public')))
//start server
app.listen (app.get('port'), () =>{
    console.log(`Servidor en puerto ${app.get('port')}`);
});