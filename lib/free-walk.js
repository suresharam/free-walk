/**
 * @function freeWalk Function to find the max distance of a free walk in circle
 * @param {String} instructions instructions example 'AAAA?C'
 * @returns {Number} Max distance
 */
module.exports.freeWalk = instructions => {
    if (instructions.length < 1 || instructions.length > 105) {
        return 'Invalid input'
    }

    let [maxA, maxC, count] = [0, 0, 0];

    // replace all '?' with 'A'
    instructions.split('').map(letter => {
        if (letter !== 'A') {
            count += 1;
        } else {
            count -= 1;
        }
        maxA = Math.max(maxA, count); // compute max every time
    });

    // replace all '?' with 'C'
    count = 0;
    instructions.split('').map(letter => {
        if (letter !== 'C') {
            count += 1;
        } else {
            count -= 1;
        }
        maxC = Math.max(maxC, count);
    });

    return Math.max(maxA, maxC); // final max distance
};
