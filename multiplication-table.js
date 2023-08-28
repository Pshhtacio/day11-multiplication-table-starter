function generateExpression(multiplicand, multiplier) {
    return `${multiplicand}*${multiplier}=${multiplicand * multiplier}\t`;
}

function generateLine(lineStart, lineEnd) {
    let expressions = "";
    for (let multiplicand = lineStart; multiplicand <= lineEnd; multiplicand++) {
        expressions += generateExpression(multiplicand, lineEnd);
    }
    return expressions.trimEnd();
}

function generateAllLines(start, end) {
    let table = "";
    for (let multiplier = start; multiplier <= end; multiplier++) {
        table += generateLine(start, multiplier);
        table += "\n";
    }
    return table.trim();
}

function isValid(start, end) {
    if (isInRange(start && isInRange(end))) {
        return start <= end    
    }
    return false;
}

function isInRange(number) {
    return number > 0 && number <= 1000;
}

export default {
    generateExpression,
    generateLine,
    generateAllLines,
    isValid
};
