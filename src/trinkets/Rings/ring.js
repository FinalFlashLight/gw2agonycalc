import React from 'react';
import Agony from './../../agony/agony';
class Ring extends React.Component {
    render(){
        return(
            <div>
                I'm a ring
                <Agony />
                <Agony />
                <Agony />
            </div>
        );
    }
}

export default Ring;