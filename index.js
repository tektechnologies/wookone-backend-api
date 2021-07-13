const express = require('express');
const app = express();
const port = 3000;

const weatherData = require('./data/weather.json');

console.log('weather Data', weatherData);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});