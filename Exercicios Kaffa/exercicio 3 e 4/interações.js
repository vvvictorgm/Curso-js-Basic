//create the retangles
let retangulo = [7,2,13,7];
let retangulo2 = [7,2,13,7];

function intersec(rec1,rec2){
    
    //make the first rectangle
    let x1 = rec1[0], y1 = rec1[1], x2 = rec1[2], y2 = rec1[3]; 
    //make the secound one
    let x3 = rec2[0], y3 = rec2[1], x4 = rec2[2], y4 = rec2[3];

    /*let xIntersec = (Math.min(x2, x4)-Math.max(x1, x3));
    
	let yIntersec = (Math.min(y2, y4) - Math.max(y1, y3));
    
    //let totalIntersec = xIntersec * yIntersec;
    */

    let areaTest = ((y2-y1+1)*(x2-x1+1));
    let areaTest2 = ((y4-y3+1)*(x4-x3+1));
    /*i try that first, but the Question say Note: the points are included in the rectangle and have a dimension of 1 unit; 
    the rectangle (0, 0; 1, 1) have an area of 4 units. so i have to check again.

    let area1 = ((x2-x1)*(y2-y1));
    let area2 = ((x4-x3)*(y4-y3));
*/
    //let areaTotalInterccao = area1+area2-totalIntersec;

    console.log(areaTest,areaTest2);



     //we know the rectangles are overlapping if:
    if((x1 < x4) && (x3 < x2) && (y1 < y4) && (y3 < y2) 
    //and if some point of the rectangles just touch in other, it's true too.
    || x1 == x3 || x1 == x4 || x2 == x3 || x2 == x4 || y1 == y3 || y1 == y4 || y2 == y3 || y2 == y4){
        return true;
        
        }else{
        //if any part of the rectangles touchs another rectangles, it's nothing touching at all
        return false;
    }

}


console.log(intersec(retangulo,retangulo2));

