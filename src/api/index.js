import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export async function fetchData(country){
    let newUrl = url;
    if(country){
        newUrl = `${url}/countries/${country}`;
    }

    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(newUrl);
        return {confirmed, recovered, deaths, lastUpdate};
    } catch (err) {
        console.log(err);
        
    }
}

export async function fetchDailyData(){
    try {
        const {data} = await axios.get(`${url}/daily`);
        
        const modifiedData = data.map((dailyData)=>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return modifiedData;
        
    } catch (err) {
        console.log(err);
        
    }
}

export async function fetchCountries(){
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`);
        
        return countries.map((country) => country.name);
    } catch (err) {
        console.log(err);
        
    }
}