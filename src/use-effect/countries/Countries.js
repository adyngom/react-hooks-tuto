import React, { Fragment, useEffect, useState } from 'react';
import { useGroupBy } from '../../hooks/groupBy';


 const request = async (url, options = null) => {
   const response = await fetch(url);
   const json = await response.json();
   return json;
 }

  const countriesUrl = `https://api.myjson.com/bins/yz4o2`;

export const Countries = ({cid}) => {
  const [countries, setCountries] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const groups = useGroupBy(countries, 'subregion', 'asc');
  useEffect(async () => {
    try {
      const payload = await request(countriesUrl);
      setCountries(payload);
      setLoading(false);
    } catch( err){
      throw new Error(`could not load countries data: ${err.toString()}`)
    }
  }, []);
 
  return (
    <Fragment>
      {
        isLoading ? <p>loading countries...</p>
        : <div className="countries">
          {
            groups.order.map( region => {
              return <section className="countries-region" key={region}>
                  <header>
                    <h1>{region}</h1>
                  </header>
                  {groups[region].map( country => {
                    return <article key={country}>
                      <h4>{country.name}</h4>  
                    </article>
                  })}
                </section>
            })
          }
        </div>
      }
    </Fragment>  
  );
}
