import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options = {
    chart: {
        type: 'pie'
    },
    title: {
        text: undefined
    },
    credits: {
        enabled: false
    },
    colors: ["#20ae5e", "#24c168", "#3ac777", "#50cd86", "#66d495", "#7cdaa4", "#92e0b4", "#a7e6c3", "#bdecd2", "#d3f3e1", "#e9f9f0"],
    tooltip: {
        formatter: function () {
            return this.key + ": <b>" + Highcharts.numberFormat(this.y, 0) + " BPRO</b> ("+this.percentage+"%)"
        }
    },
    series: [{
        data: [{
            name: "Reservoir (Treasury), distributed over 4 years",
            y: 1_325_000 * 4
        }, {
            name: "Developer fund, distributed over 4 years",
            y: 825_000 * 4
        }, {
            name: "Maker pre-genesis users, instant distribution",
            y: 500_000
        }, {
            name: "Compound pre-genesis users, instant distribution",
            y: 500_000
        }, {
            name: "Genesis liquidity mining, distributed over 3 months",
            y: 250_000
        }, {
            name: "Genesis backstop, instant distribution",
            y: 150_000
        }]
    }]
}

const pie = () => <HighchartsReact
    highcharts={Highcharts}
    options={options}
/>

export default pie