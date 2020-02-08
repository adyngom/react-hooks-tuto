import React, { Fragment, useState, useEffect, use } from 'react';
import VendingMachine from './VendingMachine';

export const Vending = () => {
    
  const [vm, setVM] = useState(null);
  const [loading, isLoading] = useState(true);
  const [data, setData] = useState(null);
  const [message, setMessage] = useState("...");

  useEffect( () => {
    fetch('https://my-json-server.typicode.com/adyngom/vmapi/db')
    .then( response => response.json())
      .then(data => {
      setData(data);
      setVM(VendingMachine(data));
      isLoading(false);
    })
  }, []);
    
  return (
    <Fragment>
      {
        loading ? <p>loading...</p>
        : <div>
            <h3>Pick a fresh drink and enjoy</h3>
            <p>{message}</p>
            <br />
            {Object.values(vm.drinksKeys).map(d => {
              return <button key={d} id={d}
                onClick={e => {
                  setMessage(vm.sale(e.target.id));
                }}>{data[d].name}</button>
            })}
            <br /><br />
            <small>VM current stock: {vm.stock()}</small>
          </div>
      }
    </Fragment>
  );
}