import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { ListGroup } from 'react-bootstrap';

const options = {
    chart: {
        type: 'area',
    },
    title: {
        text: undefined
    },
    plotOptions: {
        area: {
            stacking: "Normal"
        },
        series: {
            marker: {
                enabled: false,
                symbol: "circle"
            }
        }
    },
    credits: {
        enabled: false
    },
    tooltip: {
        shared: true,
        headerFormat: "<b>{point.key} months</b><br/>",
        pointFormatter: function () {
            return this.series.name + ": <b> " + Highcharts.numberFormat(this.y, 0) + " </b> <br/> ";
        }
    },
    series: [{
        name: "Circulating supply",
        data: [{
            name: "0 months: Genesis distribution to Maker, Compound and backstop",
            y: 1_150_000
        }, {
            y: 1_150_000
        }, {
            y: 1_150_000
        }, {
            name: "3 months: Genesis liquidity mining distributed",
            y: 1_400_000
        }, {
            y: 1_400_000
        }, {
            y: 1_400_000
        }, {
            y: 1_400_000
        }, {
            y: 1_400_000
        }]
    }]
}

const circulating = () =>
    <>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
        <ListGroup>
            <ListGroup.Item>
                0 months: 1 150 000: Genesis distribution to Maker, Compound and backstop
            </ListGroup.Item>
            <ListGroup.Item>
                3 months: 250 000: Genesis liquidity mining distributed
            </ListGroup.Item>
        </ListGroup>
    </>

export default circulating