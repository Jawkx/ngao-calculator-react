export const getLargestNumber = arr => {
    var largestSum = 0
    var largestSumIdx = 0
    for (let i = 0; i < arr.length; i++) {
        var currentCard = arr[i]
        const sum = (currentCard[3][0] + currentCard[4][0]) % 10

        if (sum > largestSum) {
            largestSum = sum
            largestSumIdx = i
        }
    }

    return [arr[largestSumIdx], largestSum]
}