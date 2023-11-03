import './App.css';
import { useEffect, useState } from 'react'
import Main from './components/Main'
import Header from './components/Header'

const getLocationData = () => {
  const requestObj = {
    lat: 26.38,
    lon: -80.21,
  }
  return requestObj
}



function App() {
  const [coord, setCoord] = useState({
    lat: 0.00,
    lon: 0.00
  })
  const [location, setLocation] = useState({place: "uranus", country: "milkyway", timezone: ''})
  const [sunObj, setSunObj] = useState({sunrise: "nah", sunset: "nope"})
  const [temperatureObj, setTemperatureObj] = useState({
    temp: "fine",
    temp_feel: "ok",
    temp_min: "not bad",
    temp_max: "not good",
    pressure: "meh"
  })
  const [weatherObj, setWeatherObj] = useState({
    clouds:'hmm',
    wind: {speed: 'sd ', deg: 'fsd ', gust: ' fsdf'}
  })

  const apiInfo = async () => {
    const locationData = getLocationData()
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${locationData.lat}&lon=${locationData.lon}&appid=cca4c5bec39519ecf9646b2eb1fccc46`
    try {
      const response = await fetch(url)
      if(!response.ok) {
        throw new Error(response.status)
      }
      const jsonWeatherData = await response.json()
      setCoord({lat: locationData.lat, lon: locationData.lon})
      setLocation({place: jsonWeatherData.name,
                   country: jsonWeatherData.sys.country,
                   timezone: jsonWeatherData.timezone})
      setTemperatureObj({temp: jsonWeatherData.main.temp,
                         temp_feel: jsonWeatherData.main.feels_like,
                         temp_min: jsonWeatherData.main.temp_min,
                         temp_max: jsonWeatherData.main.temp_max,
                         pressure: jsonWeatherData.main.pressure
                        })
      setWeatherObj({clouds: jsonWeatherData.weather[0].description,
                     wind: {speed: jsonWeatherData.wind.speed,
                            deg: jsonWeatherData.wind.deg,
                            gust: jsonWeatherData.wind.gust}})
      setSunObj({sunrise: jsonWeatherData.sys.sunrise,
                 sunset: jsonWeatherData.sys.sunset})
      console.log(jsonWeatherData)
      console.log(jsonWeatherData.weather[0].description)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    apiInfo()

  }, [])

  return (
    <div className="App">
      <Header />
      <p>Coordinates: {coord.lat}, {coord.lon}</p>
      <p>location: {location.place}, {location.country}</p>
      <p>Timezone: {location.timezone}</p>
      <p>
        Temperature: {temperatureObj.temp}, Feels like: {temperatureObj.temp_feel}, Min: {temperatureObj.temp_min}, Max: {temperatureObj.temp_max}
      </p>
      <p>Sunrise: {sunObj.sunrise}, Sunset: {sunObj.sunset}</p>
      <p>Pressure:  {temperatureObj.pressure}</p>
      <Main />
      <p>{weatherObj.clouds}</p>
      <h4>Wind</h4>
      <p>speed: {weatherObj.wind.speed} deg: {weatherObj.wind.deg}  gust: {weatherObj.wind.gust} </p>
    </div>
  );
}

export default App;
