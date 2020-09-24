export const checkBouBou = cardsSet => {
    if (cardsSet[3][2] === cardsSet[4][2] && cardsSet[3][2] !== "n") {
        return true
    }

    if (cardsSet[3][0] === cardsSet[4][0]
        && cardsSet[3][2] === "n"
        && cardsSet[4][2] === "n"
    ) {
        return true
    }

    return false
}