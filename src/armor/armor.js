import React from 'react';
import './armor.css'
import ArmorPiece from './armorpieces/armorpiece.js';

//there are 6 pieces of armor, head, shoulders, chest, hands, legs, feet
class Armor extends React.Component {
    render() {
        return (
            <div className="armorBox">
                These are the armors
                <ArmorPiece piece="Head" /> 
                <ArmorPiece piece="Shoulders" />
                <ArmorPiece piece="Chest" />
                <ArmorPiece piece="Hands" />
                <ArmorPiece piece="Legs" />
                <ArmorPiece piece="Feet" />
            </div>
        ); //make all of these the same type, and give them parameters to differentiate them.
    }
}

export default Armor;