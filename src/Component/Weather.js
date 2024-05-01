import React, { useState } from "react";
import Navbar from "./Navbar";
import { CiSearch } from "react-icons/ci";

const Weather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleClick = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c55c2bf0dd73f0519c60a40218cab0e`
    )
      .then((response) => response.json())
      .then((json) => setData([json]));
  };

  return (
    <>
      <Navbar />
      <div className="main-page">
        <p className="search-content">Search for city</p>
        <div className="input-search">
          <input
            className="input"
            type="text"
            value={city}
            placeholder="Enter the city name"
            onChange={handleChange}
          />
          <CiSearch className="search-icon" />
        </div>
        <button className="btn-content" onClick={handleClick}>
          Submit
        </button>
      </div>
      <div className="w-details">
        {data?.map((item, index) => {
          return (
            <>
              <div key={index} className="text-content">
                <img
                  src="https://t4.ftcdn.net/jpg/05/48/65/61/360_F_548656128_Jgo6gxdenc72AnNc5G6v098FMziNdjVF.jpg"
                  alt="loading"
                />
                <div>Temperature: {item.main.temp_max} C</div>
                <div>Humidity: {item.main.humidity} g/m3</div>
                <div>Wind-Speed: {item.wind.speed} km/hr</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Weather;
