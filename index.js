const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3005;

const weatherData = require('./data/weather.json');
// console.log('weather Data', weatherData);

app.use(cors());

// app.get('/', (request, response) => {
//   response.send('Hello World!');
// });

//object containing a property for each query string parameter in the route
// API endpoint of `/weather` that processes a `GET` request that contains `lat`, `lon` and `searchQuery` information.
app.get('/weather', (request, response) => {
  // console.log('request dot query', request.query );
  let { searchQuery } = request.query;
  // console.log('searcccch querysssss ', searchQuery);
  const city = weatherData.find(city => city.city_name.toLowerCase() === searchQuery.toLowerCase());
  // console.log('city to city.data.city_name', city.data.city_name);
  try{
      console.log('city', city);
      //  console.log('weatherData server', weatherData);

      
      const weatherArray = city.data.map(day => new Forecast(day));
      response.status(200).send(weatherArray);
      
    } catch(error) {
      errorHandler(error, response);
    }
  });// close function


  app.use ('*', (request, response) => {
    response.status(404).send('page not found')
  });

  class Forecast {
    constructor(day) {
      console.log('constructor day max temp ', ((day.max_temp * 9) / 5) + 32  );
      this.max_temp = (((day.max_temp * 9) / 5) + 32),
      this.wind_cdir = day.wind_cdir,
      this.date = day.valid_date,
      this.description = day.weather.description
    }
  }


  //function created to handle api 400, 404, and 500 errrors. 
function errorHandler(error, response){
  console.log(error);
  //send status 500 to client that the server is
  response.status(500).send('Something went wrong.');
}



app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});