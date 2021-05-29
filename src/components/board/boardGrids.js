import boardConstants from './boardConstants';
export const cordinates = {};
export const cordinate1 = "Hello";
export const createBoard = (ctx) => {
    let yaxis = boardConstants.initialYAxis;

    for (let i = 1; i <= 10; i++) {
        let isLeftToRight = true
        if (i % 2 == 0) {
            isLeftToRight = !isLeftToRight;
        }
        createVerticalGrids(ctx, yaxis, i, isLeftToRight);
        yaxis += boardConstants.gridHeight;
    }
}

const createVerticalGrids = (ctx, yAxis, index, isLeftToRight) => {
    let xAxis = isLeftToRight ? 0 : 1100;
    for (let i = index; i < 10 + index; i++) {
        xAxis = isLeftToRight ? xAxis + boardConstants.gridWidth : xAxis - boardConstants.gridWidth;
        if (i % 2 === 0) {
            ctx.fillStyle = isLeftToRight ? '#ffb3b3' : 'white';
            ctx.fillRect(xAxis, yAxis, boardConstants.gridWidth, boardConstants.gridHeight);
            ctx.strokeRect(xAxis, yAxis, boardConstants.gridWidth, boardConstants.gridHeight);
            const {color, value} = addLadderAndSnakes(boardConstants.columnNumber)
            ctx.fillStyle = color;
            ctx.font = "20pt sans-serif";
            ctx.fillText(value, xAxis + 10, yAxis + 50);
            cordinates[boardConstants.columnNumber] = {xAxis, yAxis}
        } else {
            ctx.fillStyle = isLeftToRight ? 'white' : '#ffb3b3';
            ctx.fillRect(xAxis, yAxis, boardConstants.gridWidth, boardConstants.gridHeight);
            ctx.strokeRect(xAxis, yAxis, boardConstants.gridWidth, boardConstants.gridHeight);
            const {color, value} = addLadderAndSnakes(boardConstants.columnNumber)
            ctx.fillStyle = color;
            ctx.font = "20pt sans-serif";
            ctx.fillText(value, xAxis + 10, yAxis + 50);
            cordinates[boardConstants.columnNumber] = {xAxis, yAxis}
        }
        boardConstants.columnNumber--;

    }
}

const addLadderAndSnakes = (number)=> {
    switch(number) {
        case 4:
        return {color: 'green', value: '4->16'}
        case 26: 
        return {color: 'green', value: '26->55'}
        case 47: 
        return {color: 'green', value: '47->90'}
        case 60: 
        return {color: 'red', value: '60->33'}
        case 76: 
        return {color: 'red', value: '76->34'}
        case 83: 
        return {color: 'red', value: '83->10'}
        case 93: 
        return {color: 'red', value: '93->52'}
        default: 
        return {color: 'black', value: number}
    }
}