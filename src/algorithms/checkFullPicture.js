export const checkFullPicture = cardSet => {

    for (let i = 0; i < cardSet.length; i++) {
        if (cardSet[i][2] === "n") {
            return false
        }
    }
    return true
}
