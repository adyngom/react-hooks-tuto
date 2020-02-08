import React, { useState } from 'react';
import './Counter.css'

export const Counter = () => {

const [count, setCount] = useState(0);

 return (
   <div id="counter">
    <div id="wrapper"></div>
    <header id="counter-header">
      <div id="header-wrapper"></div>

      <button className="cbtn" onClick= { (e) => {
        if (count > 0 ) setCount(count - 1);
      }}>-</button>

      <h1>Simple Counter</h1>

      <button className="cbtn" onClick= { (e) => {
        setCount(count + 1);
      }}>+</button>
    </header>
    <p className="count">{count}</p>
    <p className="label">Off the hooks!!!</p>
   </div>
 )
}


