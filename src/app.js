const fs = require('fs');
const path = require('path');
const express = require('express');
const chalk = require('chalk');

const app = express();

const port = process.env.port || 3000;

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) => res.render('index',{ title:'Title Index'}));

app.listen(port, () => console.log(`Project running on  ${chalk.yellow('port '+port)}`));

