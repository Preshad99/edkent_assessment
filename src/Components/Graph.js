import React from 'react';
import { Line } from 'react-chartjs-2';
import style from '../CSS/Graph'
import '../CSS/chart.css'
import DateTimePicker from '../Components/DateTimePicker'
const data = {
    labels: ['2020', 'Jan20', 'Feb20', 'Mar20', 'Apr20', 'May20', 'Jun20', 'Jul20', 'Aug20'],
    datasets: [
        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgb(50,205,50)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgb(50,205,50)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 0.5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(50,205,50)',
            pointHoverBorderColor: 'rgb(50,205,50)',
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [180, 230, 350, 420, 310, 250, 310, 405, 495],

        },

        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'blue',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'blue',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 0.5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'blue',
            pointHoverBorderColor: 'blue',
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [230, 190, 150, 170, 230, 200, 190, 200, 210]
        }
    ]
};

const options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: false,
                min: 100,
                max: 600,
                stepSize: 100
            }
        }]
    }
}


class LineChartExample extends React.Component {

    render() {
        return (
            <div>

                <div style={style.graph}>
                    <div style={style.dateTimePicker}>
                        <div style={style.headerText}>Analytics</div>
                        <div style = {{alignSelf:'flex-end'}}><DateTimePicker /></div>
                    </div>
                    <div style={style.text}>
                        <div style={style.mainText}>245/500</div>
                        <div style={style.subText}>Attribute</div>

                        <div style={style.maintext}>120</div>
                        <div style={style.subText}>Attribute1</div>


                        <div style={style.maintext}>125</div>
                        <div style={style.subText}>Attribute2</div>


                        <div style={style.maintext}>0</div>
                        <div style={style.subtext}>Attribute3</div>
                    </div>
                    <Line
                        ref="chart"
                        data={data}
                        legend={false}
                        options={options}
                    />
                </div>
            </div>
        );
    }

    componentDidMount() {
        const { datasets } = this.refs.chart.chartInstance.data
        console.log(datasets[0].data);

    }
}

export default LineChartExample;
