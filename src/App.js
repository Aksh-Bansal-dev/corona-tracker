import React from "react";
import styles from "./App.module.css";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData} from "./api";
import covid from "./images/image.png";


class App extends React.Component{

    state = {
        data: {},
        country: "",
    }

    async componentDidMount(){
        const data = await fetchData();
        // console.log(data);
        this.setState({data: data})
    }
    handleCountryChange = async (country) => {
        //fetch the data
        const data = await fetchData(country);

        //set the state
        this.setState({data: data, country: country})
    }

    render(){
        const {data, country} = this.state;
        return (
            <div className={styles.app}>
                <img className={styles.image} src={covid} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;