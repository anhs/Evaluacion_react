import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Data from './data.json';
import '../components/style/styledevideo.css'

class BadgesList extends React.Component{
    render(){
        return(

           Data.map((badge)=> {
                return (
                    <div key={badge.id}>

                        <div className="video">
                            <ReactPlayer
                            url={badge.urlvideo}
                            className='react-player'
                            playing
                            width='100%'
                            height='50%'
                            />
                            {badge.titulovideo}
                            <br></br>
                            {badge.usuario}
                            <br></br> 
                            {badge.can_visitas}
                            <br></br>
                            {badge.tiempo_de_subida}
                        </div>
                    
                        </div>
                
                )
            })
                
            
        );
    }
}

export default BadgesList;