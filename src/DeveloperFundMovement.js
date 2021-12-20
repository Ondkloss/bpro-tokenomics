import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { calculateIntermediatePoints, applyReductionsToIntermediatePoints, getListOfYearMonthStrings, getDefaultChartOptions, cutToMaxLength } from './Utils'
import { ListGroup } from 'react-bootstrap'

const address = "https://etherscan.io/address/0x225f27022a50aF2735287262a47bdacA2315a43E"
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
            []),
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
    </ListGroup>
</>

export default developerFund