import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)
var beneficios=[80,79,79,78,67,56];
var meses=["7:00","8:00","9:00","10:00","12:00"];
var midata={
    labels:meses,
    datasets:[
        {
            label:'Nivel',
            data:beneficios,
            tension: 0.5,
            fill:true,
            borderColor: 'rgb(255,99,132)',
            backgroundColor:'rgba(255,99,132,0.5)',
            pointRadius:5,
            pointBorderColor:'rgba(255,99,132)',
            pointBackgroundColor:'rgba(255,99,132)',
        }
        

    ]
    
};

var misoptions={

};




export default function ComponentChart(){
    return <Line data={midata} options={misoptions}/>
}