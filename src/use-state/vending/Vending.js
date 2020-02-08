import React, { useState } from 'react';
import VendingMachine from './VendingMachine';

export const Vending = () => {
    const inventory = {
        1: { name: "Mango Juice", stock: 2 },
        2: { name: "Banana Smoothies", stock: 2 },
        3: { name: "Guava Mix", stock: 1 },
        4: { name: "Citrus Blend", stock: 3 }
    };
    
  return (
    <div>
      <h3>Pick a fresh drink and enjoy</h3>
        <p>hello</p>
        <br />
        
        <br /><br />
        <small>VM current stock: 0</small>
    </div>
  );
}