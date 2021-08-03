import React, { useState } from 'react';
import '../index.css';
import '../App.css';

function Days () {

  // ---------------- FUNCTION POUR METTRE LE <A> SELECT EN BOLD ONCLICK ----------------

    function handleClick(e) {
        let links = document.querySelectorAll('a');
        links.forEach(element => {
            element.style.fontWeight = 'normal'
        });
        e.target.style.fontWeight = "bold"
        e.preventDefault();
    }

    return (
        <div class="App">
            <div class="row">
                <div class="col s12 m6 push-m3">
                    <div class="weather card blue-grey darken-1">
                        <div class="card-action">
                            <a onClick={handleClick} href="#">Thursday</a>
                            <a onClick={handleClick} href="#">Friday</a>
                            <a onClick={handleClick} href="#">Saturday</a>
                            <a onClick={handleClick} href="#">Sunday</a>
                            <a onClick={handleClick} href="#">Monday</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Days;