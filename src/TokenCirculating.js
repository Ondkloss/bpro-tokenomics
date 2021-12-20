import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { ListGroup } from 'react-bootstrap';
import { calculateIntermediatePoints, addPointCopies, getListOfYearMonthStrings, getDefaultChartOptions, cutToMaxLength } from './Utils';

const numberOfMonthsCovered = 9

const options = Highcharts.merge(getDefaultChartOptions(), {
    chart: {
        type: 'area',
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
        categories: getListOfYearMonthStrings(0, numberOfMonthsCovered)
    },
    series: [{
        name: "Maker pre-genesis users",
        data: addPointCopies(500_000, numberOfMonthsCovered)
    }, {
        name: "Compound pre-genesis users",
        data: addPointCopies(500_000, numberOfMonthsCovered)
    }, {
        name: "Genesis backstop",
        data: cutToMaxLength(calculateIntermediatePoints(0, 0, 12, 150_000), numberOfMonthsCovered)
    }, {
        name: "Genesis liquidity mining",
        data:  []
            .concat(addPointCopies(0, 3))
            .concat(addPointCopies(250_000, numberOfMonthsCovered - 3))
    }, {
        name: "Second liquidity mining (BIP-4)",
        data:  []
            .concat(addPointCopies(0, 8))
            .concat(addPointCopies(30_000, numberOfMonthsCovered - 8))
    }]
})

const circulating = () =>
    <>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
        <ListGroup className="mx-5">
            <ListGroup.Item className="active">
                <b>Notes</b>
            </ListGroup.Item>
            <ListGroup.Item>
                <b>April 2021 (0 months):</b> 1 000 000 BPRO - Genesis distribution to Maker and Compound pre-genesis users<br />
                <b>Source:</b> One time minting
            </ListGroup.Item>
            <ListGroup.Item>
                <b>April 2021 (0 months):</b>: 150 000 BPRO - Started genesis backstop 1 year drip<br />
                <b>Source:</b> One time minting
            </ListGroup.Item>
            <ListGroup.Item>
                <b>July 2021 (3 months):</b>: 250 000 BPRO - Genesis liquidity mining distributed<br />
                <b>Source:</b> One time minting
            </ListGroup.Item>
            <ListGroup.Item>
                <b>December 2021 (8 months):</b> 30 000 BPRO - Second liquidity mining period KPI options (BIP-4)<br />
                <b>Source:</b> Reservoir (Treasury)
            </ListGroup.Item>
            <ListGroup.Item>
                <b>Soon (December):</b> 500 000 BPRO - Venture capital round (pending confirmation, assumed to be vested)<br />
                <b>Source:</b> Developer fund
            </ListGroup.Item>
        </ListGroup>

        <ListGroup className="mx-5 mt-3">
            <ListGroup.Item className="active">
                <b>Excluded</b>
            </ListGroup.Item>
            <ListGroup.Item>
                <b>Growth squad:</b> 25 000 BPRO - Can be spent by growth squad multisig<br />
            </ListGroup.Item>
            <ListGroup.Item>
                <b>Developer fund:</b> 825 000 BPRO per year - Can be spent by developer multisig<br />
            </ListGroup.Item>
        </ListGroup>
    </>

export default circulating