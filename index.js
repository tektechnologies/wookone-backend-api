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
  response.send(` {
    "description": "Low of 17.1, high of 23.6 with broken clouds",
    "date": "2021-03-31"
  },
  {
    "description": "Low of 17.5, high of 29.9 with few clouds",
    "date": "2021-04-01"
  }`);

});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});