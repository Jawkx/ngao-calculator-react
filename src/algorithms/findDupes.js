export const findDupes = arr => {

    const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)

    const num_suite = []

    for (let i = 0; i < 5; i++) {
        let comb_num_suite = arr[i][0] + arr[i][1]
        num_suite.push(comb_num_suite)
        console.log(num_suite[i])
    }

    const dupliCheck = findDuplicates(num_suite)
    console.log(dupliCheck)

    if (dupliCheck.length !== 0) {
        return true
    }

    return false
}