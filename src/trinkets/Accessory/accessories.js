import React from 'react';
import Accessory from './accessory';
class Accessories extends React.Component {
    render(){
        return(
            <div>
                I'm accessories
                <Accessory />
                <Accessory />
                
            </div>
        );
    }
}

export default Accessories;