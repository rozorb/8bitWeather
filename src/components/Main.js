import Clock from "./Clock"

export default function Main(props) {
    return(
      <main className="app-main border-2  border-green-400">
        <section className="data-square flex justify-around border border-red-500">
          <Clock />
          <div>
            <p className= "text-2xl">Coordinates:</p>
            <p>{props.lat}, {props.lon}</p>
          </div>
          <div>
            <p className= "text-2xl">location:</p>
            <p> {props.place}, {props.country}</p>
          </div>
          <div>
            <p className= "text-2xl">Timezone:</p>
            <p> {props.timezone}</p>
          </div>
        </section>
        <section className="data-square border border-red-500">
          <img alt="weather display" />
          <p>{props.clouds}</p>
        </section>
        <section className="data-square border border-red-500">
          <div>
            <p className= "text-2xl">Temperature:</p>
            <p> {props.temp}</p>
          </div>
          <div>
            <p className= "text-2xl">Feels like:</p>
            <p> {props.temp_feel},</p>
          </div>
          <div>
            <p className= "text-2xl">Humidity:</p>
            <p> {props.humidity}</p>
          </div>
        </section>
        <section className="data-square border border-red-500">
          <div>
            <p className= "text-2xl">Min:</p>
            <p> {props.temp_min}</p>
          </div>
          <div>
            <p className= "text-2xl">Max:</p>
            <p> {props.temp_max}</p>
          </div>
          <div>
            <p className= "text-2xl">Sunrise:</p>
            <p> {props.sunrise}</p>
          </div>
          <div>
            <p className= "text-2xl">Sunset:</p>
            <p> {props.sunset}</p>
          </div>
        </section>
        <section className="data-square border border-red-500">
          <div>
            <p className= "text-2xl">Pressure:</p>
            <p>  {props.pressure}</p>
          </div>
          <h4 className="text-4xl">Wind</h4>
          <div>
            <p className= "text-2xl">Speed:</p>
            <p> {props.speed} mph</p>
            <p className= "text-2xl">Wind Direction:</p>
            <p> {props.deg}</p>
            <p className= "text-2xl">Gust:</p>
            <p> {typeof props.gust === 'undefined' ? 'n/a': props.gust}</p>
          </div>
        </section>
      </main>
    )
}