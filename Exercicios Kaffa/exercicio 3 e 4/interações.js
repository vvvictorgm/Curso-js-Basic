//create the retangles
let retangulo = [3, 5, 11, 11];
let retangulo2 = [11, 8, 14, 11];//i create, it's supose to be 4
//let retangulo2 = [7, 2, 13, 7];//b
//let retangulo2 = [11,11,15,13];//c

function intersec(rec1, rec2) {
    let xIntersec, yIntersec, totalIntersec;
    //make the first rectangle
    let x1 = rec1[0], y1 = rec1[1], x2 = rec1[2], y2 = rec1[3];
    //make the secound one
    let x3 = rec2[0], y3 = rec2[1], x4 = rec2[2], y4 = rec2[3];

    if (((x1 == x3 && y1 == y3) || (x2 == x3) && (y2 == y3) || (x1 == y3) && (y2 == x4) || (x2 == y3) && (y1 == x4))) {
        totalIntersec = 1;
    } else {
        console.log(Math.min(x2, x4) - Math.max(x1, x3));
        if ((Math.min(x2, x4) - Math.max(x1, x3)) > 0) {
            xIntersec = (Math.min(x2, x4) - Math.max(x1, x3)) + 1;
        } else if (x1 == x3 || x1 == x4 || x2 == x3 || x2 == x4) {
            console.log("eu passei pelo xxx");
            xIntersec = testeDeEncostar(x1, x2, x3, x4);
        } else {
            console.log("eu passei pelo x0");
            xIntersec = 0;
        }

        if ((Math.min(y2, y4) - Math.max(y1, y3)) > 0) {
            yIntersec = (Math.min(y2, y4) - Math.max(y1, y3)) + 1;
        } else if (y1 == y3 || y1 == y4 || y2 == y3 || y2 == y4) {
            console.log("eu passei pelo y");
            yIntersec = testeDeEncostar(y1, y2, y3, y4);

        } else {
            console.log("eu passei pelo y0");
            yIntersec = 0;
        }

        if ((xIntersec == 0) || (yIntersec == 0)) {
            totalIntersection = 0;
        } else {
            totalIntersec = xIntersec * yIntersec;
        }
    }
    console.log(totalIntersec, yIntersec, xIntersec);

    //we know the rectangles are overlapping if:
    if ((x1 < x4) && (x3 < x2) && (y1 < y4) && (y3 < y2)
        //and if some point of the rectangles just touch in other, it's true too.
        || x1 == x3 || x1 == x4 || x2 == x3 || x2 == x4 || y1 == y3 || y1 == y4 || y2 == y3 || y2 == y4) {
        return true;
    } else {
        //if any part of the rectangles touchs another rectangles, it's nothing touching at all
        return false;
    }

}
function testeDeEncostar(n1, m1, n2, m2) {
    let a1 = n1;
    let a2 = m1;
    let a3 = n2;
    let a4 = m2;
    let diferenca;
    let count;
    if (a1 > a3) {
        diferenca = a1 - a3;
    } else if (a1 < a3) {
        diferenca = a3 - a1;
    } else if (a1 > a4) {
        diferenca = a1 - a4;
    } else if (a1 < a4) {
        diferenca = a4 - a1;
    }

    if (a2 > a3) {
        diferenca = a2 - a3;
    } else if (a2 < a3) {
        diferenca = a3 - a2;
    } else if (a2 > a4) {
        diferenca = a2 - a4;
    } else if (a2 < a4) {
        diferenca = a4 - a2;
    }



    return (diferenca + 1);

}


console.log(intersec(retangulo, retangulo2));

