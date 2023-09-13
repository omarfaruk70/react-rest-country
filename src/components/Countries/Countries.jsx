import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
const Countries = () => {
    // all state for set new data.
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])
    
    //  all effect for load data
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountries(data))
    },[]);


        // all function for handle event and passing props
    const handleVisitedCountry = (country)=>{
        // console.log(country);
        // console.log('add this country to visit');
        // visitedCountry.push(country) // it will not work because react can not read push or pop method of array. 
        const newVisitedCountries = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountries)
    };
    const handleVisitedFlags = ()=>{

        
    }
    
    // return all from this component
        return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited country info div */}
            <div>
                <h4>Visited Countries: {visitedCountry.length}</h4>
                <ul>
                    {
                        visitedCountry.map(country=> <li>{country.name.common}</li>)
                    }
                </ul>
            </div>
           <div className="country-container">
            {
                countries.map(country=> <Country 
                    key={countries.cca3} 
                    country={country}
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlags = {handleVisitedFlags} 
                    ></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;
