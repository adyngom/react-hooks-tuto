import React from 'react';
import './Counter.css'

export const Counter = () => {

 return (
   <div id="counter">
    <div id="wrapper"></div>
    <header id="counter-header">
      <div id="header-wrapper"></div>

      <button className="cbtn">-</button>

      <h1>Simple Counter</h1>

      <button className="cbtn">+</button>
    </header>
    <p className="count">0</p>
    <p className="label">Off the hooks!!!</p>
   </div>
 )
}


