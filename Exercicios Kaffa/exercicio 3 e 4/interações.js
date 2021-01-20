//create the retangles
let retangulo = [3, 5, 11, 11];//a
//let retangulo2 = [11, 8, 14, 11];//i create, it's supose to be 4
//let retangulo = [7, 2, 13, 7];//b
//let retangulo2 = [11,11,15,13];//c
let retangulo2 = [2,4,6,8];

function intersec(rec1, rec2) {
    let xIntersec, yIntersec, totalIntersec;
    //make the first rectangle
    let x1 = rec1[0], y1 = rec1[1], x2 = rec1[2], y2 = rec1[3];
    //make the secound one
    let x3 = rec2[0], y3 = rec2[1], x4 = rec2[2], y4 = rec2[3];
    //question 5
    /*than we check all the possibilities when just 1 point is touching with another, 
    this happen only when cornors touch    
    */
    if (((x1 == x3 && y1 == y3) || (x2 == x3) && (y2 == y3) || (x1 == y3) && (y2 == x4) || (x2 == y3) && (y1 == x4))) {
        totalIntersec = 1;
    } else {
        //when we exclude the possibility of the cornors touching, know we have to check if in fact the rectangles are intersect each others
        if ((Math.min(x2, x4) - Math.max(x1, x3)) > 0) {
            /*and if it's > 0, so in fact the rectangles are intersect, so for this particular case, when the points are included
            have a dimension, we have to add 1 in this moment, because if it don't count we just say the are touching and not 
            intersecting, in that case it's necessary to include this points on the math
            */
            xIntersec = (Math.min(x2, x4) - Math.max(x1, x3)) + 1;
} else {
    //if not, so we have 0 intersect in the X
            xIntersec = 0;
        }
        //we check know if the are intersect or touch in y 
        if ((Math.min(y2, y4) - Math.max(y1, y3)) > 0) {
            yIntersec = (Math.min(y2, y4) - Math.max(y1, y3)) + 1;
} else {
        //if not, we have 0 intersect in the Y
            yIntersec = 0;
        }
        /*this point we check if xIntersec or yIntersec are 0, because if one of was is we have to make a sum
        this happen because the point are include, if it's not, in that case the interect will be zero, in our case, if one are zero
        and another is something, so we image the rectangles are just touching in x ou y
        */
        if ((xIntersec == 0) || (yIntersec == 0)) {
            totalIntersec = xIntersec + yIntersec;
        } else {
            //if it's not just the x or the y are touching, so we have full interect, and we calculate it
            totalIntersec = xIntersec * yIntersec;
        }
    }
    console.log(totalIntersec);
    //question 4
    //we know the rectangles are overlapping if
    if ((x1 < x4) && (x3 < x2) && (y1 < y4) && (y3 < y2)
        //and if some point of the rectangles just touch in other, it's true too.
        || x1 == x3 || x1 == x4 || x2 == x3 || x2 == x4 || y1 == y3 || y1 == y4 || y2 == y3 || y2 == y4) {
        return true;
    } else {
        //if any part of the rectangles touchs another rectangles, it's nothing touching at all
        return false;
    }

}
console.log(intersec(retangulo, retangulo2));

