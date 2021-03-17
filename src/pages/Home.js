import React from 'react';


import Badge from '../components/Badge';
import Header from '../components/header';
import Navbar from '../components/Navbar';
import  '../pages/stylo.css'

class Home extends React.Component{
    render() {
        return (
        <div>
            <div className="encabezado">
                <Header/>
            </div>
            <div className="nav">
                <Navbar/>
            </div>
            <div className="body">
                <Badge/>
            </div>
            
            
        </div>
        )
    }
}

export default Home;