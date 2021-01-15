//create the retangles
let retangulo = [7,2,13,7];
let retangulo2 = [11,11,15,13];

function intersec(rec1,rec2){
    //make the first rectangle
    let x1 = rec1[0], y1 = rec1[1], x2 = rec1[2], y2 = rec1[3]; 
    //make the secound one
    let x3 = rec2[0], y3 = rec2[1], x4 = rec2[2], y4 = rec2[3];
    // Question 4
    //first we have to compute the area of retangle are overlape
    let x_overlap,y_overlp;
    //than we do the math:
    x_overlap = ((x1+y1)*(x3+y3))-(x1)*(x3);
    console.log(x_overlap);
    //we know the rectangles are overlapping if:
    if((x1 < x4) && (x3 < x2) && (y1 < y4) && (y3 < y2)){
        return true;
        //and if some point of the rectangles just touch in other, it's true too.
    }else if(x1 == x3 || x1 == x4 || x2 == x3 || x2 == x4 || y1 == y3 || y1 == y4 || y2 == y3 || y2 == y4 ){
        return true;
    }else{
        //if any part of the rectangles touchs another rectangles, it's nothing touching at all
        return false;
    }

    

    return true;

}
console.log(intersec(retangulo,retangulo2));

