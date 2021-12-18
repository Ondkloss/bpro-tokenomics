const calculateIntermediatePoints = (startX, startY, endX, endY) => {
    const result = []
    const diffY = endY - startY;
    const gapY = diffY / (endX - startX);

    for (let i = startX; i <= endX; i++) {
        result.push(startY + (gapY * i))
    }

    return result
}

const applyReductionsToIntermediatePoints = (intermediatePoints, xReducations) => {
    let result = [...intermediatePoints]

    xReducations.forEach((xReduction) => {
        const x = xReduction[0]
        const reduction = xReduction[1]

        result = result.map((value, index) => {
            if(index >= x) {
                return value - reduction
            }
            else {
                return value
            }
        })
    })

    return result
}

const cutToMaxLength = (dataArray, maxLength) => {
    if(dataArray.length > maxLength) {
        return dataArray.slice(0, maxLength)
    }
    else {
        return dataArray
    }
}

const addPointCopies = (point, numberOfCopies) => {
    return Array(numberOfCopies).fill(point)
}

// Assumption: All data starts at 0 meaning April 2021, and then increases month by month
const numberToYearMonthString = (number) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month = ((number % 12) + 3) % 12
    const year = Math.floor(((number + 3) / 12) + 2021)

    return months[month]+" "+year
}

const getListOfYearMonthStrings = (from, to) => {
    const result = []

    for(let i = from; i <= to; i++) {
        result.push(numberToYearMonthString(i))
    }
    
    return result
}

const getDefaultChartOptions = () => {
    return {
        title: {
            text: undefined
        },
        colors: ["#20ae5e", "#24c168", "#3ac777", "#50cd86", "#66d495", "#7cdaa4", "#92e0b4", "#a7e6c3", "#bdecd2", "#d3f3e1", "#e9f9f0"],
        credits: {
            enabled: false
        }
    }
}

export {
    calculateIntermediatePoints,
    applyReductionsToIntermediatePoints,
    addPointCopies,
    getListOfYearMonthStrings,
    getDefaultChartOptions,
    cutToMaxLength
}