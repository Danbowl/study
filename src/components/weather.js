import React from "react";

const Weather = props => (
        <div className="infoWeath">
            { props.city &&
            <div>
                <p>Местоположение:  {props.city}, {props.county} </p>
                <p> Температура: {props.temp} </p>
                <p> Давление: {props.pressure} </p>
                <p> Заход солнца: {props.sunset} </p>
            </div>
            }
            <p className="error">{ props.error }</p>
        </div>
);

export default Weather;
