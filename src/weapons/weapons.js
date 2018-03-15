import React from 'react';
import WeaponSet from './weaponsets';



class Weapons extends React.Component {
    render() {
        return (
            <div>
                <WeaponSet type='2' />
                <WeaponSet type='1' />
            </div>
        );
    }
}

export default Weapons;