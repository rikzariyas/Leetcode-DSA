/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
      let max = candies[0];

    // Find the greatest number of candies
    for (let i = 1; i < candies.length; i++) {
        if (candies[i] > max) {
            max = candies[i];
        }
    }

    let result = [];

    // Check each kid
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            result.push(true);
        } else {
            result.push(false);
        }
    }

    return result;
};