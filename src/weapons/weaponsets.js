import React from 'react';
import TwoHanded from './weapontypes/twohanded';
import OneHanded from './weapontypes/onehanded';


//1 for 2 1 handed, 2 for 1 2 handed, and 3 for 1 1 handed,
//4 for none?
class WeaponSet extends React.Component {
    render() {
        let weaponTypeNum = parseInt(this.props.type);


        if(weaponTypeNum === 1 ){
            return (<div><OneHanded /> <OneHanded /></div>);
        }
        else if(weaponTypeNum === 2) {
            return (<div><TwoHanded /></div>);
        } else if(weaponTypeNum === 3) {
            return (<div><OneHanded /></div>);
        }
    }
}

export default WeaponSet;