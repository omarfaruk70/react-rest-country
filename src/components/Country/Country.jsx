import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    // console.log(country)
    // console.log(handleVisitedFlags);
    const [visited, setVisited] = useState(false);
    const {name, flags, capital, population, cca3} = country;
    const handleVisit=()=>{
        // setVisited(true)
        setVisited(!visited)
    }
    // console.log(handleVisitedCountry)
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'Black' : 'purple'}}>Name: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Its capital city : {capital}</p>
            <p>Population: {population}</p>
            <p>Country code: {cca3}</p>
            <button onClick={()=> handleVisitedCountry(country)}>Mark as Visited</button>
            <button onClick={()=> handleVisitedFlags(flags?.png)}>Add Flag</button>
            <button onClick={handleVisit}>{visited ? 'visited' : 'Going'}</button>
            {/* {visited ? 'I have visited this country' : 'Going'} */}
            {visited && 'I have visited this country'}
        </div>
    );
};

export default Country;