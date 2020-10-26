const { freeWalk } = require("./lib/free-walk");

/**
 * 1) Free Walk
 * Problem:- 
 * You are on a circular path of infinite radius. From your initial position, you can move either in the clockwise
 * direction or in the anticlockwise direction but only along the circular path. Your movements are represented
 * by a string 
 * S
 *  of length 
 * L
 * . This string can consist of three different types of characters, each denoting a move:
 * A: You move 1 unit in the anticlockwise direction
 * C: You move 1 unit in the clockwise direction
 * ?: You move 1 unit either in the clockwise or the anticlockwise direction
 * Write a program to find the maximum distance from your initial position in any direction at any point oftime.
 * Input format
 * • First line: T
 *  T (number of test cases)
 * • Next  T T
 * lines: S
 * Output format
 * For each test case, print the maximum distance from the initial position in any direction at any point of time.
 * Constraints
 * 1&lt;=T&lt;=10
 * 1&lt;=Length of string &lt;= 105
 *  Sample Input 
 *  1
 * AAAA?C
 * Sample Output 
 *    5
 * Explanation
 * If you replace &#39;?&#39; with A, he can move 5 unit distance in an Anti-Clockwise direction.
 */
if (process.argv[2]) { // read instructions string from command line argument
    const instructions = process.argv[2];
    const maxDistance = freeWalk(instructions);
    console.log(maxDistance);
} else {
    console.error('Enter inpur string in command line argument');
    process.exit(0);
};
