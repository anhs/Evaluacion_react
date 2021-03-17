import React from 'react';
import BadgesList from './Badgelist';

class  Badge extends React.Component{
    render() {
        return (

        <div className="contenedor">
        <div className="contenedor_img">
            <h6>Recommended</h6>
            <div className="contenedor_imagen">
                <BadgesList/>
            </div>
          </div>
          </div>
        );
      }
}

export default Badge;