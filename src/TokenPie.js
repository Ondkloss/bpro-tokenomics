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
    tooltip: {
        formatter: function () {
            return this.key + ": <b>" + Highcharts.numberFormat(this.y, 0) + " BPRO</b>"
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