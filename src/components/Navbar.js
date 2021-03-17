import React from 'react';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import navegador from '../components/images/nav.png';
import '../components/style/Navbar.css'

class Navbar extends React.Component{
    render(){

        return (
            <div className="Navbar">
                <div className="opciones">
               
                    <h2> <FontAwesomeIcon icon={faHome}/>      Inicio</h2>
                   
                    <h2><FontAwesomeIcon icon="home"/>Explorar</h2>

                    <h2>Suscripciones</h2>

                </div>
                <div className="opciones2">

                    <h3>Biblioteca</h3>
                </div>
            </div>
                
        )

    }
    
}

export default Navbar;