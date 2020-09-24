export const getLargestNumber = arr => {
    var largestSum = 0
    var largestSumIdx = 0

    var allAddition = []
    for (let i = 0; i < arr.length; i++) {
        var sixThreeNum = 0
        var currentCard = arr[i]
        var num1 = currentCard[3][0]
        var num2 = currentCard[4][0]
        if (num1 === 3 || num1 === 6) {
            sixThreeNum += 1
            num1 = 3
        }
        if (num2 === 3 || num2 === 6) {
            sixThreeNum += 1
            num2 = 3
        }
        const sum = num1 + num2
        allAddition.push([i, sum % 10])

        for (let j = 0; j < sixThreeNum; j++) {
            allAddition.push([i, (sum + j) / 10])
        }
    }

    for (let i = 0; i < allAddition.length; i++) {
        if (allAddition[i][1] > largestSum) {
            largestSum = allAddition[i][1]
            largestSumIdx = i
        }
    }


    return [arr[largestSumIdx], "Number:".concat(largestSum.toString(10))]
}