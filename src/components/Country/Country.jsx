import { useState } from 'react';
import './Country.css'

const Country = ({country, handelVisitedCountries}) => {
    // const {name} = country;
    console.log(country);
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handelVisited = () =>{
        setVisited(!visited);
    }
    // console.log(handelVisitedCountries)
    const passWithParameter = () =>{
        handelVisitedCountries(country);
    }
    return (
        <div className={`country ${visited ? 'visited': 'nonViisited'}`}>
            <div className='box'>
            <h5 style={{color: visited ? 'green': 'black'}}>Name:{name.common}</h5>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p><small>Code:{cca3}</small></p>
            <button onClick={passWithParameter}>Mark-Visited</button>
            <br />
            <hr />
            <button onClick={handelVisited}>{visited? 'Visited': 'Going'}</button>
            {visited ? 'I have visite this Country.': 'I want to visit'}
            
            
            </div>
        </div>
    );
};

export default Country;