import React, { } from 'react';
import '../index.css';

function FormSearch (props) {

    return (
        <div className="container w-100 d-flex justify-content-center " >
            <form onSubmit={props.submit} className="w-50 d-flex flex-column justify-content-center">

                <input className="inputsearch"
                    value={props.dayInput}
                    type="text"
                    placeholder="Rechercher une ville"
                    onChange={props.search}
                />
                <button className="btn "
                    variant="success"
                    onClick={props.submit}>Rechercher
                </button>
            </form >
        </div>
    )
}

export default FormSearch;