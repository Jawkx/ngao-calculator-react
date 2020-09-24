export const checkDonggu = cardsSet => {
    if (cardsSet[3][0] === 1 && cardsSet[3][1] === "s" && cardsSet[4][2] !== "n") {
        return true
    }
    return false
}