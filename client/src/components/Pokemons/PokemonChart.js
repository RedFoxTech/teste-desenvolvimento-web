import React, {Fragment} from 'react';
import ApexChart from 'react-apexcharts'

export default class PokemonChart extends React.Component {
    state = {
        details: {},
        series: [],
        options: {
            chart: {
                type: 'bar',
                height: 120
            },
            plotOptions: {
                bar: {horizontal: true}
            },
            dataLabels: {
                enabled: true
            },
            xaxis: {
                categories: ['Atk', 'Def', 'Sta']
            }
        }
    }

    componentWillMount() {
        const details = this.props.details;
        this.setState({
            details: details,
            series: [
                {'name': 'Attribute', data: [details.atk, details.def, details.sta]}
            ]
        });
    }

    render() {
        const {options, series} = this.state;
        return (
            <ApexChart 
                options={options} series={series} 
                type="bar" height={350} />
        )
    }
}