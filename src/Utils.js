const calculateIntermediatePoints = (startX, startY, endX, endY) => {
    const result = []
    const diffY = endY - startY;
    const gapY = diffY / (endX - startX);

    for (let i = startX; i <= endX; i++) {
        result.push([i, startY + (gapY * i)])
    }

    return result
}

export {
    calculateIntermediatePoints
}