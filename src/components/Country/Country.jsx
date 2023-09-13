import './Country.css'
const Country = ({country}) => {
    console.log(country)
    const {name, flags, capital} = country;
    return (
        <div className="country">
            <h3>Name: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Its capital city : {capital}</p>
        </div>
    );
};

export default Country;