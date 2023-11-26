import './App.css';
import { useEffect, useState } from 'react'
import Main from './components/Main'
import Header from './components/Header'
import { kelvinToFahrenheit, windDirection } from './apiFunctions';

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
    pressure: "meh",
    humidity: ""
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
      setTemperatureObj({temp: kelvinToFahrenheit(jsonWeatherData.main.temp),
                         temp_feel: kelvinToFahrenheit(jsonWeatherData.main.feels_like),
                         temp_min: kelvinToFahrenheit(jsonWeatherData.main.temp_min),
                         temp_max: kelvinToFahrenheit(jsonWeatherData.main.temp_max),
                         pressure: jsonWeatherData.main.pressure,
                         humidity: jsonWeatherData.main.humidity
                        })
      setWeatherObj({clouds: jsonWeatherData.weather[0].description,
                     wind: {speed: ((jsonWeatherData.wind.speed)*(2.237)).toFixed(0),
                            deg: windDirection(jsonWeatherData.wind.deg),
                            gust: jsonWeatherData.wind.gust}})
      setSunObj({sunrise: jsonWeatherData.sys.sunrise,
                 sunset: jsonWeatherData.sys.sunset})
      console.log("This is the fahrenheit ", kelvinToFahrenheit(jsonWeatherData.main.temp))
      console.log(jsonWeatherData)
      console.log(jsonWeatherData.weather[0].description)
      console.log("this is the gust", jsonWeatherData.wind.gust)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    apiInfo()

  }, [])

  return (
    <div className="App bg-blue-200">
      <Header />
      <Main lat={coord.lat} lon={coord.lon} place={location.place}
            country={location.country} timezone={location.timezone} temp={temperatureObj.temp}
            temp_feel={temperatureObj.temp_feel} temp_min={temperatureObj.temp_min}
            temp_max={temperatureObj.temp_max}
            sunrise={sunObj.sunrise} sunset={sunObj.sunset} pressure={temperatureObj.pressure}
            humidity={temperatureObj.humidity}
            clouds={weatherObj.clouds} speed={weatherObj.wind.speed} deg={weatherObj.wind.deg}
            gust={weatherObj.wind.gust} />
    </div>
  );
}

export default App;
