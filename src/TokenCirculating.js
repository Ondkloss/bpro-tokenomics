import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { ListGroup } from 'react-bootstrap';
import { addPoints, getListOfYearMonthStrings } from './Utils';

const numberOfMonthsCovered = 8

const options = {
    chart: {
        type: 'area',
    },
    title: {
        text: undefined
    },
    colors: ["#20ae5e", "#24c168", "#3ac777", "#50cd86", "#66d495", "#7cdaa4", "#92e0b4", "#a7e6c3", "#bdecd2", "#d3f3e1", "#e9f9f0"],
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
        formatter: function () {
            let result = "";
            let sum = 0;

            this.points.forEach(point => {
                result += point.series.name + ": <b>" + Highcharts.numberFormat(point.y, 0) + " BPRO</b><br/>"
                sum += point.y
            })

            result = "<b>" + this.points[0].x+" <> "+this.points[0].point.x + " months (Total: " + Highcharts.numberFormat(sum, 0) + " BPRO)</b><br />" + result

            return result;
        }
    },
    xAxis: {
        type: 'category',
        categories: getListOfYearMonthStrings(0, numberOfMonthsCovered - 1)
    },
    series: [{
        name: "Maker pre-genesis users",
        data: addPoints(500_000, undefined, 0, 500_000, numberOfMonthsCovered - 1)
    }, {
        name: "Compound pre-genesis users",
        data: addPoints(500_000, undefined, 0, 500_000, numberOfMonthsCovered - 1)
    }, {
        name: "Genesis backstop",
        data: addPoints(150_000, undefined, 0, 150_000, numberOfMonthsCovered - 1)
    }, {
        name: "Genesis liquidity mining",
        data:  addPoints(250_000, 0, 3, 250_000, numberOfMonthsCovered - 1 - 3)
    }]
}

const circulating = () =>
    <>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
        <ListGroup className="mx-5">
            <ListGroup.Item>
                <b>April 2021 (0 months):</b> 1 150 000 BPRO - Genesis distribution to Maker, Compound and backstop<br />
                <b>Source:</b> One time minting
            </ListGroup.Item>
            <ListGroup.Item>
                <b>July 2021 (3 months):</b>: 250 000 BPRO - Genesis liquidity mining distributed<br />
                <b>Source:</b> One time minting
            </ListGroup.Item>
            <ListGroup.Item>
                <b>Soon:</b> 30 000 BPRO or 90 000 BPRO - Second liquidity mining period KPI options<br />
                <b>Source:</b> Reservoir (Treasury)
            </ListGroup.Item>
            <ListGroup.Item>
                <b>Soon:</b> 500 000 BPRO - Venture capital round<br />
                <b>Source:</b> Developer fund
            </ListGroup.Item>
        </ListGroup>
    </>

export default circulating