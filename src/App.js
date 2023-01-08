import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { NEW_WEATHER_API_KEY, NEW_WEATHER_API_URL } from './api';
import { useState, useEffect} from 'react';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    const currentWeatherFetch = fetch(`${NEW_WEATHER_API_URL}key=${NEW_WEATHER_API_KEY}&q=New Delhi&aqi=yes`);
  Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();

        setCurrentWeather({city: "New Delhi", ...weatherResponse });
      })

  }, []);

  const handleOnSearchChange = (searchData) => {
    // console.log(searchData);;
    const city = searchData.label;

    // const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    // http://api.weatherapi.com/v1/current.json?key=<YOUR API KEY>&q=London&aqi=yes
    const currentWeatherFetch = fetch(`${NEW_WEATHER_API_URL}key=${NEW_WEATHER_API_KEY}&q=${city}&aqi=yes`);
    // const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        // const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        // setForecast({ city: searchData.label, ...forecastResponse });
      })

      .catch((err) => console.log(err));
  }

  console.log(currentWeather);
  // console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
