import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { calculateIntermediatePoints, getListOfYearMonthStrings } from './Utils'
import { ListGroup } from 'react-bootstrap'

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
        categories: getListOfYearMonthStrings(0, 49),
        tickInterval: 3
    },
    series: [{
        name: "Reservoir (Treasury)",
        data: calculateIntermediatePoints(0, 0, 48, 1_325_000 * 4, 49)
    }, {
        name: "Developer fund",
        data: calculateIntermediatePoints(0, 0, 48, 825_000 * 4, 49)
    }, {
        name: "Maker pre-genesis users",
        data: calculateIntermediatePoints(0, 500_000, 48, 500_000, 49)
    }, {
        name: "Compound pre-genesis users",
        data: calculateIntermediatePoints(0, 500_000, 48, 500_000, 49)
    }, {
        name: "Genesis backstop",
        data: calculateIntermediatePoints(0, 150_000, 48, 150_000, 49)
    }, {
        name: "Genesis liquidity mining",
        data: []
            .concat(calculateIntermediatePoints(0, 0, 3, 250_000, 4).slice(0, -1))
            .concat(calculateIntermediatePoints(3, 250_000, 48, 250_000, 46))
    }]
}

const area = () => <>
    <HighchartsReact
        highcharts={Highcharts}
        options={options}
    />
    <ListGroup className="mx-5">
        <ListGroup.Item>
            <b>Reservoir (Treasury):</b> Issuance is 1 325 000 BPRO per year, for 4 years
        </ListGroup.Item>
        <ListGroup.Item>
            <b>Developer fund:</b> Issuance is 825 000 BPRO per year, for 4 years
        </ListGroup.Item>
    </ListGroup>
</>

export default area