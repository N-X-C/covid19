import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changeableUrl = url;
    if(country){
        changeableUrl = `${url}/countries/${country}`;
    }
    try{
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        // console.log(data);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        
    }
}

export const fetchDailyData = async () => {
    
    try{
        const { data } = await axios.get(`${url}/daily`);
        console.log(data);
        const currentDate = new Date();
        const month = currentDate.getMonth();
        // const modifiedData = data.map((dailyData) => {
        //     if(){
        //         {
        //                 confirmed: dailyData.confirmed.total,
        //                 deaths: dailyData.deaths.total,
        //                 date: dailyData.reportDate,
        //         }
        //     }
        // });
        const toDate = new Date();
        let modifiedData = data.map(element => {
            const dataDate = new Date(element.reportDate);
            const newObj = {};
            if(dataDate.getFullYear = toDate.getFullYear && dataDate.getMonth() >= toDate.getMonth()){
                newObj['confirmed'] = element.confirmed.total;
                newObj['deaths'] = element.deaths.total;
                newObj['date'] = element.reportDate;
            }      
            return newObj;
        });
        console.log('modifiedData >>', modifiedData);
        // console.log('modifiedData >>',modifiedData);
        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchCountryData = async () => {
    try{
        const { data: {countries}} = await axios.get(`${url}/countries`);
        console.log(countries);
        return countries.map((country) => country.name);
    }catch(error){

    }
}

