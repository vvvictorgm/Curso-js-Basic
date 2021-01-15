//create the retangles

let a1,a2,a3,a4,b1,b2,b3,b4,c1,c2,c3,c4;
let rectA = [[a1,a2][a3,a4]];
let rectB = [[b1,b2][b3,b4]];
let rectC = [[c1,c2][c3,c4]];

/*find the new 2 points,
we have the width and height of the points 1 and 2
we have to discover width and height of the points 3 and 4
the rule for the first two pointos is
w1,h1 || w2,h2
we can observe the other two points is
w1,h2 || w2,h1
*/

let reactANewPoints = [[reactA[a1,a4]][a2,a3]];
