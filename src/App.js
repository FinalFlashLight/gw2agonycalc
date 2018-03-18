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

document.title = "GW2 Agony Calculator";

//these arrays are all for testing the agonycalc
let armorArr = [{rarity: 'ascended', agony:{tpValue:3999}}, {rarity: 'legendary', agony:{tpValue:5000}}];
let trinketsArr = [];
let weaponsetsArr = [];
let bankArr = [];





class App extends Component {
  test = this.agonycalc(armorArr, trinketsArr, weaponsetsArr, bankArr);

  render() {
    
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
        {this.test.infuseRemovers} infusionremovers {this.test.agonySlots} slots
      </div>
    );
  }

  //agonycalc is where the main feature of the app.
  
  agonycalc (armor, trinkets, weaponsets, bank){
    let basecost = 0;
    let infusionremovers = 0;
    let agonyArr = [];
    let agonySlots = 0;
    //count armor
    for(let i = 0; i < armor.length; ++i){
      if(armor[i].rarity !== 'legendary' && armor[i].agony.tpValue >= 2400){
        //if the armor isnt legendary, and the agony on it is worth 24silver or more
        //we'll need to buy a agony infusion remover
        ++infusionremovers;
        agonyArr.push(armor[i].agony);
      }

      if(armor[i].rarity === 'ascended' || armor[i].rarity === 'legendary'){
        ++agonySlots;
      }
    }

    //count weaponsets
    for(let i = 0; i < weaponsets.length; ++i){ //weaponsets
      //there should only be 2 weaponsets, and 1-2 weapons per set
      for(let j = 0; j < weaponsets[i].weapons.length; ++j){ //weapons
        for(let k = 0; k < weaponsets[i].weapons[j].agony.length; ++k){ //agonyslots per weapon
          if(weaponsets[i].weapons[j].agony[k].tpValue >= 2400){
            //if the agony is worth 24silver or more, we'll need another agony infustion remover
            ++infusionremovers;
            agonyArr.push(weaponsets[i].weapons[j].agony[k]);
            ++agonySlots; //this can go wrong because they have a slot, but no agony inside of it.
          }
        }
      }
    }
    //weaponsets: [weaponset, weaponset]; <-- almost always will be 2 weaponsets.
    //weaponset: {type:'one 2-handed or two one-handed', weapons:[weapon, weapon]} <-- 1 or 2 weapons, depending on type of weaponset
    //weapon: {rarity: 'ascended', agony: [agony, agony]} <-- amount of agony depends on type of set/weapon
    //agony: {tpValue: 2400} <-- value is based off copper, so 2400 is 24 silver.

    
    //count trinkets
    for(let i = 0; i < trinkets.length; ++i){ //trinkets include backpack, accessorys, and rings.
      for(let j = 0; j < trinkets[i].agony.length; ++j){

      }
    }    

    //this is just so we can see if it works, lol
    return {baseCost: basecost, infuseRemovers: infusionremovers, agonySlots: agonySlots, agonyArr: agonyArr};
  }


  






}


export default App;
