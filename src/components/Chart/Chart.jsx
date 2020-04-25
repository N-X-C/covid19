import React, { useState, useEffect } from "react";
import {fetchDailyData} from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({data,country}) => {
    const [dailyData, setDailyData] = useState({});

    useEffect( () => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    },[]);
    
    // console.log('dailyData type >>',typeof dailyData);
    const lineChart = (
        (dailyData.length > 0) ? (
            <Line 
                data={
                    {
                        labels: dailyData.filter(value =>{ 
                                    if(value.date != null){
                                        return value;
                                    }
                                })
                                .map(({ date }) => date),
                        datasets: [
                            {
                                data: dailyData.filter(value =>{ 
                                    if(value.date != null){
                                        return value;
                                    }
                                }).map(( {confirmed} ) => confirmed),
                                label: 'Infected',
                                borderColor: '#33f',
                                fill: false,
                                strokeColor: 'rgba(220,180,0,1)',
                                pointColor: 'rgba(220,180,0,1)',
                            },{
                                data: dailyData.filter(value =>{ 
                                    if(value.date != null){
                                        return value;
                                    }
                                }).map(( {deaths} ) => deaths),
                                label: 'Deaths',
                                borderColor: '#F04F5A',
                                // backgroundColor: '#F04F5A',
                                fill: false,
                            }],
                    }
                } />
            ) : null 
    );

    const barChart = (
        data.confirmed? (
            <Bar 
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            '#A1A1C8',
                            '#FF8573',
                            '#FFDE84'
                        ],
                        data: [
                            data.confirmed.value,
                            data.recovered.value,
                            data.deaths.value
                        ]
                    }]
                }}
                options ={{
                    legend: { display: false },
                    title: {display:true, text: `Current State in ${country}`},
                }}
            />
        ) : null
    )

    return (
        <div>
            {country? barChart:lineChart}
        </div>
        );
}

export default Chart;