import { checkFullPicture } from './checkFullPicture'
import { getPassport } from './getPassport'
import { getPermutation } from './getPermutation'
import { checkDonggu } from './checkDonggu'
import { checkBouBou } from './checkBouBou'
import { getLargestNumber } from './getLargestNum'
import { findDupes } from './findDupes'

const getBestCombination = arr => {

    const allPosibility = getPermutation(arr)
    const allPassport = getPassport(allPosibility)



    if (allPassport.length !== 0) {
        for (let i = 0; i < allPassport.length; i++) {

            if (arr.length === 5) {
                const allPosibility = getPermutation(arr)
                const allPassport = getPassport(allPosibility)
                if (findDupes(arr)) {
                    return [arr, "invalid, dupes."]
                }
                if (allPassport.length !== 0) {
                    for (let i = 0; i < allPassport.length; i++) {
                        if (checkFullPicture(allPassport[i])) {
                            return [allPassport[i], "Full Picture"]
                        }


                        if (checkDonggu(allPassport[i])) {
                            return [allPassport[i], "Dong gu"]
                        }

                        if (checkBouBou(allPassport[i])) {
                            return [allPassport[i], "Bou Bou"]
                        }
                    }

                    return (getLargestNumber(allPassport))
                } else {
                    return [arr, "No Passport"]
                }
            } else {
                return [arr, "No Enough Card"]
            }
        }
    }
}

export default getBestCombination