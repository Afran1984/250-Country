import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])

    const handelVisitedCountries = country =>{
        console.log(country);
        // visitedCountries.push(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div >
            <h3>Countries: {countries.length}</h3>
            <div >
                <h5>Visited Countries:{visitedCountries.length}</h5>

                <ul className="country-contanier box">
                    {
                        visitedCountries.map(com => <li key={com.cca3}>{com.name.common}</li>)
                    }
                </ul>

            </div>
            <div className="country-contanier">
            {
                countries.map(country =><Country key={country.cca3}
                    handelVisitedCountries={handelVisitedCountries}
                country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;