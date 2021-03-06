import React from 'react';
import {Polar} from 'react-chartjs-2';
import './languageChart.css';

const data = {
    datasets: [{
        data: [
            10,10,8.5,4
        ],
        backgroundColor: [
            "#FF6384",
            "#FFCE56",
            "#36A2EB",
            "#84FF63"
        ],
    }],
    labels: [
        "Swissgerman: Native Language",
        "German: Native Language",
        "English: Fluent, First C1 (CEFR)",
        "French: Conversational Level"
    ]
};

export const LanguageChart = (props) => {
    return (
        <div className='language-chart-container'>
            {props.isVisible &&
                <Polar height={500} data={data} options={{maintainAspectRatio: false, legend: {position: 'right'}, tooltips: {enabled: false}, scale: {ticks: {display: false}}}}/>
            }
        </div>
    );
}
