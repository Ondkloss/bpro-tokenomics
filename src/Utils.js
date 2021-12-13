const calculateIntermediatePoints = (startX, startY, endX, endY) => {
    const result = []
    const diffY = endY - startY;
    const gapY = diffY / (endX - startX);

    for (let i = startX; i <= endX; i++) {
        result.push([i, startY + (gapY * i)])
    }

    return result
}

const addPoints = (data, startPoint, numberOfStartPoints, endPoint, numberOfEndPoints) => {
    const result = [].concat(Array(numberOfStartPoints).fill(startPoint), data, Array(numberOfEndPoints).fill(endPoint))
    console.log(result)
    return result
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

    console.log(result)
    return result
}

export {
    calculateIntermediatePoints,
    addPoints,
    getListOfYearMonthStrings
}