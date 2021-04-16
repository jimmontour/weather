import React, { useState, useEffect } from 'react'
import { WeatherStyles } from '../styles/WeatherStyles'
import Clouds from '../assets/images/clouds.jpg'
import { BiCloudSnow } from 'react-icons/bi'

export default function Weather() {
   const [name, setName] = useState('')
   const [temp, setTemp] = useState('')
   const [condition, setCondition] = useState('')
   const [searchInput, setSearchInput] = useState('')

   useEffect(() => {
      weatherRequest('buffalo')
   }, []);

    const weatherRequest = async (cityName) => {
       const weather = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=9fea2eee139f9e0daabf0cf1f712a5fa`,
      { mode: 'cors' }
      )
      const json = await weather.json();
      console.log(json)
      setName(json.name)
      setTemp(json.main.temp)
      setCondition(json.weather[0].main)
    }

    const handleChange = (input) => {
       setSearchInput(input.target.value)
    };

   const handleSubmit = () => {
      const newCity = weatherRequest(searchInput)
      setSearchInput('');
      return newCity;
   };

   return (
     <WeatherStyles>
       <img src={Clouds} alt="" className="background-image" />
       <div className="card">
         <BiCloudSnow size={150} />
         <div className="city-temp">
           <h4>{name}</h4>
           <h4>{temp}°F</h4>
         </div>
         <div className="search-city">
           <input
             type="text"
             onChange={handleChange}
             value={searchInput}
             placeholder="Enter City"
           />
           <button onClick={() => handleSubmit()}>Submit</button>
         </div>
       </div>
     </WeatherStyles>
   );
}
