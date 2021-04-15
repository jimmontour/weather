import React, { useState, useEffect } from 'react'

export default function Weather() {
   const [name, setName] = useState('')
   const [temp, setTemp] = useState('')
   const [tempMax, setTempMax] = useState('')
   const [tempMin, setTempMin] = useState('')
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
      setTempMax(json.main.temp_max)
      setTempMin(json.main.temp_min)
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
     <div>
       <div>
         <input
           type="text"
           onChange={handleChange}
           value={searchInput}
         />
         <button onClick={() => handleSubmit()}>Submit</button>
       </div>
       <p>{name}</p>
       <p>{temp}</p>
       <p>{tempMax}</p>
       <p>{tempMin}</p>
       <p>{condition}</p>
     </div>
   );
}
