const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();




// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3005;

const weatherData = require('./data/weather.json');
// console.log('weather Data', weatherData);


app.use(cors());

app.get('/', (request, response) => {
  response.send('Hello World!');
});

// app.use ('*', (request, response) => {
//   response.status(404).send('page not found')
// });

//object containing a property for each query string parameter in the route
// API endpoint of `/weather` that processes a `GET` request that contains `lat`, `lon` and `searchQuery` information.

app.get('/weather', (request, response) => {
  console.log('request dot query', request.query );

  let { searchQuery } = request.query;

  console.log('searcccch querysssss ', searchQuery);

  const city = weatherData.find(city => city.city_name.toLowerCase() === searchQuery.toLowerCase());
  console.log('city to lower case', city);
  
  
  
  
  try{
        console.log('city', city);
        console.log('weatherData', weatherData);
      const weatherArray = city.data.map(day => new Forecast(day));
      response.status(200).send(weatherArray);
    } catch(error) {
      errorHandler(error, response);
    }

  });// close function











  class Forecast {
    constructor(day) {
      this.date = day.valid_date,
      this.description = day.weather.description
    }
  }



function errorHandler(error, response){
  console.log(error);
  response.status(500).send('server is broken');

}







app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});