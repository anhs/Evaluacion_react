import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'


import '../components/style/Header.css';
class Header extends React.Component{
    render(){

        return (
            <div className="Header">
                <div className="icono">
                <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: 'red' }}/>
                    <span className="font-weight-bold">YouTube</span>
                </div>
                <div className="form-group">            
                
                    <input className="form-control" type="search" name="twitter" placeholder="Search"/>

                
                        
                </div>


            </div>        

  
                
        )

    }
    
}

export default Header;