const express = require('express');
const { json, urlencoded } = require('body-parser');
const { resolve } = require('path');
const {} = require('node-kakao');
const { main } = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', resolve(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/', main);

app.listen(port, () => console.log(`http://localhost:${port}`));