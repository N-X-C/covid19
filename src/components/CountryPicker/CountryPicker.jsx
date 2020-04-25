import React, { useState, useEffect} from "react";
import styles from './CountryPicker.css';
import {fetchCountryData} from '../../api';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchCountries, setFetchedCountires] = useState([]);

    useEffect(()=>{
        const fetchCountriesApi = async () => {
            setFetchedCountires(await fetchCountryData());
        }
        fetchCountriesApi();
    },[setFetchedCountires]);

    // console.log(fetchCountries);

    return (
        <div>
            <div className="form-group country-picker">
                <select className="form-control country-picker-control" defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {fetchCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
                </select>
            </div>
        </div>
    );
}

export default CountryPicker;