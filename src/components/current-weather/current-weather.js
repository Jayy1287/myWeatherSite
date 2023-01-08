import "./current-weather.css"
// import day from "./1.jpg"
// import night from "./0.jpg"



const CurrentWeather = ({ data }) => {
    

    


    return (
        <div className = "bg" style={{ backgroundImage:`url(./${data.current.is_day}.jpg)`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
            <div className="weather" >
                <div className="top">
                    <div>
                        <p className="city">{data.city}</p>
                        <p className="weather-description">{data.current.condition.text}</p>
                    </div>
                    <img alt="weather" className="weather-icon" src={`${data.current.condition.icon}`} />

                </div>

                <div className="bottom">
                    <p className="temperature"> {data.current.temp_c}°C  </p>
                    <div className="details">
                        <div className="parameter-row">
                            <span className="parameter-label-details"> Details</span>
                        </div>

                        <div className="parameter-row">
                            <span className="parameter-label"> Region</span>
                            <span className="parameter-value"> {data.location.region}</span>

                        </div>

                        <div className="parameter-row">
                            <span className="parameter-label"> Country</span>
                            <span className="parameter-value"> {data.location.country}</span>

                        </div>

                        <div className="parameter-row">
                            <span className="parameter-label"> Time zone</span>
                            <span className="parameter-value"> {data.location.tz_id}</span>

                        </div>

                        <div className="parameter-row">
                            <span className="parameter-label"> Local Time</span>
                            <span className="parameter-value"> {data.location.localtime}</span>

                        </div>

                        <div className="parameter-row">
                            <span className="parameter-label"> Temp in Fahrenheit</span>
                            <span className="parameter-value"> {data.current.temp_f}F</span>

                        </div>

                        <div className="parameter-row">
                            <span className="parameter-label"> Weather Conditions</span>
                            <span className="parameter-value"> {data.current.condition.text}</span>

                        </div>

                    </div>
                </div>
            </div>
        </div>


    );

}

export default CurrentWeather;