import React from 'react';
import {Polar} from 'react-chartjs-2';
import './languageChart.css';

const data = {
    datasets: [{
        data: [
            10,8.5,4
        ],
        backgroundColor: [
            "#FF6384",
            "#FFCE56",
            "#36A2EB"
        ],
    }],
    labels: [
        "German: Native Language",
        "English: Fluent, First C1 (CEFR)",
        "French: Conversational Level"
    ]
};

export const LanguageChart = (props) => {
    return (
        <div className='language-chart-container'>
            {props.isVisible && 
                <Polar data={data} options={{legend: {position: 'right'}, tooltips: {enabled: false}, scale: {ticks: {display: false}}}}/>
            }
        </div>
    );
}