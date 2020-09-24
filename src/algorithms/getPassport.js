const checkPassport = arr => {
    var sum = 0
    var threeSixCheck = 0
    for (let i = 0; i < 3; i++) {
        let cardNum = arr[i][0]

        if (cardNum === 6 || cardNum === 3) {
            sum = sum + 3
            threeSixCheck += 1
        } else {
            sum = sum + cardNum
        }
    }

    for (let j = 0; j <= threeSixCheck; j++) {
        if ((sum + (j * 3)) % 10 === 0) {
            return true
        }
    }
    return false
}

export const getPassport = arr => {
    var gotPassport = []

    for (let i = 0; i < arr.length; i++) {
        if (checkPassport(arr[i])) {
            gotPassport.push(arr[i])
        }
    }

    return gotPassport
}