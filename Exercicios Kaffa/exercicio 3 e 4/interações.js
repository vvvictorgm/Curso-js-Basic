//create the retangles
let retangulo = [3,5,11,11];
let retangulo2 = [7,2,13,7];

function intersec(rec1,rec2){
    
    //make the first rectangle
    let x1 = rec1[0], y1 = rec1[1], x2 = rec1[2], y2 = rec1[3]; 
    //make the secound one
    let x3 = rec2[0], y3 = rec2[1], x4 = rec2[2], y4 = rec2[3];

    //bottom left point of the overlapping area.
	let bl_x = Math.max(x1, x3);
	let bl_y = Math.max(y1, y3);

	// top right point of the overlapping area.
	let tr_x = Math.min(x2, x4);
    let tr_y = Math.min(y2, y4);
    
    let total = (tr_x - bl_x) * (tr_y - bl_y);
    let area1 = Math.abs(x1 - y1) * Math.abs(x2 - y2);
    let area2 = Math.abs(x3 - y3) * Math.abs(x4 - y4);
    let areaTotalInterccao = area1+area2-total;
    console.log(areaTotalInterccao);


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

}


console.log(intersec(retangulo,retangulo2));

