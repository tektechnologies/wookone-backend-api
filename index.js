const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();



// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3005;

const weatherData = require('./data/weather.json');
console.log('weather Data', weatherData);


app.use(cors());

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.get('/weather', (request, response) => {
  response.send(``);

});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});