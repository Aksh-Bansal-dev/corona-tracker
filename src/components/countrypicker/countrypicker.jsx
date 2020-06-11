import React,{useState, useEffect} from "react";
import {NativeSelect, FormControl} from "@material-ui/core";
import styles from "./countrypicker.module.css";
import { fetchCountries } from "../../api";

function CountryPicker({handleCountryChange}){

    const [country,setCountry] = useState([]);

    useEffect(()=>{
        async function fetchAPI(){
            setCountry(await fetchCountries());
        }
        fetchAPI();

    },[setCountry])

    // console.log(country);
    
    return (
        <FormControl className={styles.container}>
            <NativeSelect defaultValue = "" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {country.map((con,i)=>(
                    <option key = {i} value={con}>{con}</option>
                ))}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;