import React from 'react';
import "./armorpiece.css"

class ArmorPiece extends React.Component {
    render() {
        return (
            <div>
                this is the {this.props.piece}, hi
                <div className="armorpiecebox"></div>
                <div className="agonybox"></div>
            </div>
        );
    }
}

export default ArmorPiece;