import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { calculateIntermediatePoints, applyReductionsToIntermediatePoints, addPointCopies, getListOfYearMonthStrings, getDefaultChartOptions, cutToMaxLength } from './Utils'

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
        name: "Reservoir (Treasury)",
        data: cutToMaxLength(
            applyReductionsToIntermediatePoints(calculateIntermediatePoints(0, 0, 48, 1_325_000 * 4),
            [
                [5, 200_000],
                [5, 90_000],
                [5, 25_000],
                [5, 50_000]
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
        name: "Growth squad fund (BIP-5)",
        data: cutToMaxLength(
            []
            .concat(addPointCopies(0, 5))
            .concat(addPointCopies(25_000, 49 - 5)),
            numberOfMonthsCovered)
    }, {
        name: "Immunefi bug bounty (BIP-6)",
        data: cutToMaxLength(
            []
            .concat(addPointCopies(0, 5))
            .concat(addPointCopies(50_000, 49 - 5)),
            numberOfMonthsCovered)
    }]
})

const reservoir = () => <>
    <HighchartsReact
        highcharts={Highcharts}
        options={options}
    />
</>

export default reservoir