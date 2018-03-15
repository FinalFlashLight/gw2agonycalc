import React from 'react';
import Ring from './ring';
class Rings extends React.Component {
    render(){
        return(
            <div>
                I'm a set of rings
                <Ring />
                <Ring />
            </div>
        );
    }
}

export default Rings;