import React, { useState } from 'react';
import VendingMachine from './VendingMachine';

export const Vending = () => {
    const inventory = {
        1: { name: "Mango Juice", stock: 2 },
        2: { name: "Banana Smoothies", stock: 2 },
        3: { name: "Guava Mix", stock: 1 },
        4: { name: "Citrus Blend", stock: 3 }
    };
    const [vm, setVM] = useState(VendingMachine(inventory));
    const [message, setMessage] = useState("...");
    const { drinksKeys, sale, stock } = vm;
  return (
    <div>
      <h3>Pick a fresh drink and enjoy</h3>
        <p>{message}</p>
        <br />
        {Object.values(drinksKeys).map(d => {
            return <button key={d} id={d}
                onClick={e => {
                    setMessage(sale(e.target.id));
                }}>{inventory[d].name}</button>
            })}
        <br /><br />
        <small>VM current stock: {vm.stock()}</small>
    </div>
  );
}