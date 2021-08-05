import React, { useState } from 'react';
import '../index.css';
import '../App.css';

function Days (props) {

    // ---------------- POUR RECUP LE JOUR J ----------------

    const jour = new Date(props.date * 1000);

    const day = (new Intl.DateTimeFormat('en-US', { weekday: 'long' })).format(jour);

    //console.log(new Intl.DateTimeFormat('en-EN', { weekday: 'long'}).format(Day)); ** AFFICHER DATE


    // ---------------- FUNCTION POUR METTRE LE <A> SELECT EN BOLD ONCLICK && AFFICHER LA METEO ----------------

    function handleClick(e) {

        let links = document.querySelectorAll('a');

        links.forEach(element => {
            element.style.fontWeight = 'normal'
        });

        e.target.style.fontWeight = "bold"

        e.preventDefault();

        props.changeDay(e.target.getAttribute('data-time')); // RECUP DATA ATTRIBU

    }

    // ---------------- FUNCTION AFFICHER EACH DAY ----------------

    function displayDays () {

        if (props.nextDays.length > 0) {
            return props.nextDays.map((element)=> {
                let dayUp = (new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(element * 1000)));

                return (
                    <a onClick={handleClick} data-time = {element} href="#">{dayUp}</a>
                )
            })
        }

    }


  // ---------------- 5 DAYS PREVISONS JOUR DYNAMIQUE ----------------

    return (
        <div class="App">
            <div class="row">
                <div class="col s12 m6 push-m3">
                    <div class="weather card blue-grey darken-1">
                        <div class="card-action">
                            <a onClick={handleClick} href="#">{day}</a>
                            {displayDays()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Days;