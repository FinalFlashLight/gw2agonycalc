import React, { Component } from 'react';
import './App.css';
import Armor from './armor/armor';
import Intro from './intro/intro';
import Weapons from './weapons/weapons';
import Amulet from './trinkets/Amulet/Amulet';
import Back from './trinkets/Backpack/back';
import Accessories from './trinkets/Accessory/accessories';
import Rings from './trinkets/Rings/rings';
import Water from './water/water';

let docTitle = document.title;
document.title = "GW2 Agony Calculator";


class App extends Component {

  agony = [{
    worth: 145,
    value: 1,
    from: 'leg'
  },
  {
    worth: 300,
    value: 2,
    from: 'bank'
  }
];

  agonycalc (agonyarr){
    let valueTotal = 0;
    let worthTotal = 0;
    for(let i = 0; i < agonyarr.length; ++i){
      valueTotal += agonyarr[i].value;
      worthTotal += agonyarr[i].worth;
    }
    
    return ([valueTotal, worthTotal]);
  }

  render() {
    let totals = this.agonycalc(this.agony);
    return (
      <div>
        <Intro />
        <Armor />
        <Weapons />
        <Back />
        <Accessories />
        <Rings />
        <Amulet />
        <Water />

        {totals[1]}
        {totals[0]}
      </div>
    );
  }
}

//array of the agonyinfusions, and the agony needs to have, how much its worth, what its +1 is, and where it came from.
//whether that was armor, or the bank or what.
//ask, how much they are willing to spend on this, in gold/relics and also how much agony they want.


export default App;
