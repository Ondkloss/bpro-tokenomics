import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { calculateIntermediatePoints, applyReductionsToIntermediatePoints, getListOfYearMonthStrings, getDefaultChartOptions, cutToMaxLength, addPointCopies } from './Utils'
import { ListGroup } from 'react-bootstrap'

const address = "https://etherscan.io/address/0x225f27022a50aF2735287262a47bdacA2315a43E"
const numberOfMonthsCovered = 60
const pointOfExtrapolation = 28

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
        name: "Developer fund",
        data: cutToMaxLength(
            applyReductionsToIntermediatePoints(calculateIntermediatePoints(0, 0, 48, 825_000 * 4),
            [
                [8, 538_840]
            ]),
            numberOfMonthsCovered)
    }, {
        name: "Venture capital seed  round",
        data: cutToMaxLength(
            []
            .concat(addPointCopies(0, 8))
            .concat(addPointCopies(538_840, 49 - 8)),
            numberOfMonthsCovered)
    }]
})

const developerFund = () => <>
    <HighchartsReact
        highcharts={Highcharts}
        options={options}
    />
    <ListGroup className="mx-5">
        <ListGroup.Item className="active">
            <b>Notes</b>
        </ListGroup.Item>
        <ListGroup.Item>
            <b>Smart contract:</b> Address is <a href={address}>0x225f27022a50aF2735287262a47bdacA2315a43E</a>
        </ListGroup.Item>
            <ListGroup.Item>
                <b>Venture capital seed round:</b> Vested linearly over 4 years from April 2021 (unconfirmed amount, but equal to moved BPRO at time of entry)
            </ListGroup.Item>
            <ListGroup.Item>
                <b>Untracked:</b> There are a number of transactions from the developer fund probably spent towards development not tracked here
            </ListGroup.Item>
    </ListGroup>
</>

export default developerFund