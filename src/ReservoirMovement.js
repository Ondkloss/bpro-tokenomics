import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { calculateIntermediatePoints, applyReductionsToIntermediatePoints, addPointCopies, getListOfYearMonthStrings, getDefaultChartOptions, cutToMaxLength } from './Utils'
import { ListGroup } from 'react-bootstrap'

const address = "https://etherscan.io/address/0xcC09c04A9e3930343290184544F97669eFF18A8d"
const numberOfMonthsCovered = 18
const pointOfExtrapolation = 10

const options = Highcharts.merge(getDefaultChartOptions(), {
    chart: {
        type: 'area',
    },
    plotOptions: {
        area: {
            stacking: "Normal",
            zoneAxis: "x",
            zones: [{
                value: pointOfExtrapolation,
              }, {
                dashStyle: "dash"
              }]
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

            result = "<b>" + this.points[0].x + " <> " + this.points[0].point.x + " months (Total: " + Highcharts.numberFormat(sum, 0) + " BPRO)</b><br />" + result

            return result;
        }
    },
    xAxis: {
        type: 'category',
        categories: getListOfYearMonthStrings(0, numberOfMonthsCovered)
    },
    series: [{
        name: "Reservoir (Treasury)",
        data: cutToMaxLength(
            applyReductionsToIntermediatePoints(calculateIntermediatePoints(0, 0, 48, 1_325_000 * 4),
            [
                [5, 200_000],
                [5, 90_000],
                [5, 25_000],
                [5, 50_000],
                [10, 10_000]
            ]),
            numberOfMonthsCovered)
    }, {
        name: "v2 native integration rewards (BIP-3)",
        data: cutToMaxLength(
            []
            .concat(addPointCopies(0, 5))
            .concat(addPointCopies(200_000, 49 - 5)),
            numberOfMonthsCovered)
    }, {
        name: "Second liquidity mining (BIP-4)",
        data: cutToMaxLength(
            []
            .concat(addPointCopies(0, 5))
            .concat(addPointCopies(90_000, 49 - 5)),
            numberOfMonthsCovered)
    }, {
        name: "Growth squad (BIP-5)",
        data: cutToMaxLength(
            []
            .concat(addPointCopies(0, 5))
            .concat(addPointCopies(25_000, 49 - 5)),
            numberOfMonthsCovered)
    }, {
        name: "Immunefi bug bounty (BIP-6) and Hats.finance (BIP-7)",
        data: cutToMaxLength(
            []
            .concat(addPointCopies(0, 5))
            .concat(addPointCopies(50_000, 49 - 5)),
            numberOfMonthsCovered)
    }, {
        name: "Nexus Mutual cover (BIP-11)",
        data: cutToMaxLength(
            []
            .concat(addPointCopies(0, 10))
            .concat(addPointCopies(10_000, 49 - 10)),
            numberOfMonthsCovered)
    }]
})

const reservoir = () => <>
    <HighchartsReact
        highcharts={Highcharts}
        options={options}
    />
    <ListGroup className="mx-5">
        <ListGroup.Item className="active">
            <b>Notes</b>
        </ListGroup.Item>
        <ListGroup.Item>
            <b>Smart contract:</b> Address is <a href={address}>0xcC09c04A9e3930343290184544F97669eFF18A8d</a>
        </ListGroup.Item>
    </ListGroup>
</>

export default reservoir