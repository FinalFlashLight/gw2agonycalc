import React from 'react';
import "./armorpiece.css"

class ArmorPiece extends React.Component {
    constructor(props) {
        super(props);
        this.state = {piece: props.piece};
    }
    render() {
        return (
            <div>
                this is the {this.state.piece}, hi
                <div className="armorpiecebox"></div>
                <div className="agonybox"></div>
            </div>
        );
    }
}

export default ArmorPiece;