// import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect, setError } from 'react';
import CardWeather from './CardWeather';
import Header from './Header';
import Days from './Days';
import FormSearch from './Form';

function App() {

  // ---------------- RECUP LES OBJETS POUR LES AFFICHER DANS CARDWEATHER ----------------

  const [name, setName] = useState(''); // RECUP LE NAME CITY
  const [temp, setTemp] = useState(''); // RECUP LA TEMP
  const [speed, setSpeed] = useState(''); // RECUP LE VENT
  const [icon, setIcon] = useState(''); // RECUP L'ICON
  const [date, setDate] = useState(''); // RECUP LA DATE
  const [days, setDays] = useState(''); // RECUP LES JOURS D'AP
  const [result, setResult] = useState({}); // STOCKER DATA FOLLOWING DAYS
  const [dayInput, setDayInput] = useState(''); //

  // ---------------- SET LES DONNEES RECUP ----------------

  const setData = (data) => {
    setName(data.city.name)
    setTemp(Math.ceil(data.list[0].main.temp)) // Method Math.ceil() = Retourne le plus petit entier supérieur ou égal à la valeur passée en paramètre.
    setSpeed(data.list[0].wind.speed) // [0] HEURE ACTUELLE
    setIcon(data.list[0].weather[0].icon)
    setResult(data)
    setDate(data.list[0].dt)
    setDays([
      data.list[0].dt + 86400,
      data.list[0].dt + 86400 * 2,
      data.list[0].dt + 86400 * 3,
      data.list[0].dt + 86400 * 4,

    ])
    
  };

  // ---------------- AFFICHER LES DONNEES DE EACH DAY SELECT ----------------

  function changeDay (timestamp) {

    result.list.forEach(element => {

    	if (element.dt == timestamp) {

        	setTemp(Math.ceil(element.main.temp))
        	setSpeed(element.wind.speed)
        	setIcon(element.weather[0].icon)

      	}
    })
  }

  // ---------------- HOOK POUR RECUP L'API + REQUESTON POUR FAIRE LA REQ 1X ----------------

  const [requestOn, setrequestOn] = useState(true)

//   useEffect(() => {
//     if (requestOn) {
//       fetch(`http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=404ddeaf9c711ece85d229567f9b34b9`)
//         .then(res => res.json())
//         .then(data => {
//           setData(data)
//           setrequestOn(false)
//         });
//     }
//   }, [requestOn]) // REQUEST ONLY ONCE

  // ---------------- HANDLE SEARCH & SUBMIT TO FIND A NEW PLACE ----------------

	const handleSearch = (e) => {

		e.preventDefault()
    	setDayInput(e.target.value)
  	}

	// SI RECHERCHE VIDE ALORS PREND LA GEOLOCALISATION ACTUELLE

	if (name === '') {
		if (navigator.geolocation){
			navigator.geolocation.getCurrentPosition(getPosition);
		}

		// RECUP LA POSITION DU USER
	
		function getPosition (position){

			fetch( `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=295ea2f7b1e72f0d8b7e167b77de0ecb&units=metric`)
			
			.then(res => res.json())
			.then(data => {
			setData(data)
			});
	  	}
	}

	// SUBMIT SEARCH IF INPUT COMPLETE (DIF) SERACH W/ WHATS INSIDE INPUT ELSE ALERTE

	const handleSubmit = (e) => {
		e.preventDefault()
  
		if (dayInput !== ''){
			fetch( `https://api.openweathermap.org/data/2.5/forecast?q=${dayInput}&appid=295ea2f7b1e72f0d8b7e167b77de0ecb&units=metric`)
			.then(res => res.json())
			.then(data => {
		  		setData(data)
			});
	  	}
		else{
	   		alert("Merci de renseigner une ville")
	  	}
	}


  return (

    <div className="App">
      <Header/>
      <FormSearch search={handleSearch} submit={handleSubmit}/>
      <CardWeather name={name} temp={temp} wind={speed} icon={icon}/>
      <Days date={date} changeDay={changeDay} nextDays={days}/>
    </div>

  );

}

export default App;
