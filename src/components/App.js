// import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect } from 'react';
import CardWeather from './CardWeather';
import Header from './Header';
import Days from './Days';

function App() {

  // ---------------- RECUP LES OBJETS POUR LES AFFICHER DANS CARDWEATHER ----------------

  const [name, setName] = useState(''); // RECUP LE NAME CITY
  const [temp, setTemp] = useState(''); // RECUP LA TEMP
  const [speed, setSpeed] = useState(''); // RECUP LE VENT
  const [date, setDate] = useState(''); // RECUP LA DATE
  const [icon, setIcon] = useState(''); // RECUP L'ICON

  // ---------------- SET LES DONNEES RECUP ----------------

  const setData = (data) => {
    setName(data.city.name)
    setTemp(Math.ceil(data.list[0].main.temp)) // Method Math.ceil() = Retourne le plus petit entier supérieur ou égal à la valeur passée en paramètre.
    setSpeed(data.list[0].wind.speed) // [0] HEURE ACTUELLE
    setDate(data.list[0].dt)
    setIcon(data.list[0].weather[0].icon)
  };

  // ---------------- HOOK POUR RECUP L'API + REQUESTON POUR FAIRE LA REQ 1X ----------------

  const [requestOn, setrequestOn] = useState(true)

  useEffect(() => {
    if (requestOn) {
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=404ddeaf9c711ece85d229567f9b34b9`)
        .then(res => res.json())
        .then(data => {
          setData(data)
          setrequestOn(false)
        });
    }
  }, [requestOn]) // REQUEST ONLY ONCE

  // ---------------- POUR RECUP LE JOUR J ----------------

  const Day = new Date(date * 1000);

  console.log(new Intl.DateTimeFormat('en-EN', { weekday: 'long'}).format(Day)); // AFFICHER DATE

  return (

    <div className="App">
      <Header/>
      <CardWeather name={name} temp={temp} wind={speed} icon={icon}/>
      <Days/>
    </div>

  );

}

export default App;
