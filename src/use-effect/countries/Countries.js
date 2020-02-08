import React, { Fragment, useEffect, useState } from 'react';
import { useGroupBy } from '../../hooks/groupBy';


 const request = async (url, options = null) => {
   const response = await fetch(url);
   const json = await response.json();
   return json;
 }

  const countriesUrl = `https://api.myjson.com/bins/yz4o2`;

export const Countries = ({cid}) => {
  return (
    <Fragment>
        <div className="countries">
            <h2>countries work ;)</h2>  
        </div>
    </Fragment>  
  );
}
