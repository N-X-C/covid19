import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

import banner from "./img/shape.png";
import logo from "./img/logo.png";

import {fetchData} from './api';

class App extends React.Component {
    
    state = { data: {}, country: '',};

    async componentDidMount(){
        const fetchedData = await fetchData();
        // console.log(fetchedData);
        this.setState({
            data: fetchedData
        });
    }

    handleCountryChange = async (country) => {
        // console.log(country);
        const fetchedData = await fetchData(country);
        // fetch data
        // console.log('counrtywise',fetchedData);
        this.setState({
            data: fetchedData,
            country: country
        });

        // set data
    }

    render() {
        const {data,country} = this.state;
        return (
            <div className={styles.main}>
                <div className={styles.bannerShapeLeft}></div> 
                    <div className={styles.mainWrapper}>
                        <div className={styles.header}>
                            <img src={logo} className="logo" />
                        </div>
                        {/* <svg  className={styles.bodyLeft} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#0099ff" fill-opacity="1" d="M0,128L48,117.3C96,107,192,85,288,96C384,107,480,149,576,149.3C672,149,768,107,864,90.7C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg> */}
                        <Cards data={data} />
                        <div className="row">
                            <div className="col-lg-3">
                                <CountryPicker  handleCountryChange={this.handleCountryChange}/>
                            </div>
                            <div className="col-lg-9">
                                <div className={styles.chartWrapper}>
                                    <Chart data={data} country={country} />
                                </div>
                            </div>
                        </div>
                    </div> 
                <div className={styles.bannerShape}>
                    <img src={banner} alt="image" />
                </div>
            </div>
        )
    }
}

export default App;