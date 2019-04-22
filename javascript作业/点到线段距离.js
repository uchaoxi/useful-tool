
function getDistance(line, point) {
    const [[x1, y1], [x2, y2]] = line, [x, y] = point;
    let cross = (x - x1) * (x2 - x1) + (y - y1) * (y2 - y1);//AP*AB

    if (cross < 0) {
        return Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1));//|AP|
    }
    let d = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);//AB*AB
    if (cross > d) {
        return Math.sqrt((x - x2) * (x - x2) + (y - y2) * (y - y2));//|BP|
    }
    let r = cross / d;//AC/BC
    let px = x1 + (x2 - x1) * r;
    let py = y1 + (y2 - y1) * r;
    let ac = cross/Math.sqrt(d);
    return Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1) - ac * ac);
   
}

function disBetweenPoints([x1, y1], [x2, y2]) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}
console.log(getDistance([[0,1],[1,0]],[0,0]))


class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
function disOfPoints(p1,p2){
    return Math.sqrt((p1.x-p2.x)*(p1.x-p2.x)+(p1.y-p2.y)*(p1.y-p2.y));
}
function getDistance2([p1,p2], p) {
    let cross = (p.x - p1.x) * (p2.x - p1.x) + (p.y - p1.y) * (p2.y - p1.y);
    let d12 = disOfPoints(p1,p2);
    let r = cross/d12;
    if(r<0){        
        return disOfPoints(p,p1);
    }
    if(r>1){
        return disOfPoints(p,p2);
    }
    return Math.sqrt(disOfPoints(p,p1)**2 - r*r);

}

let p1 = new Point(1,0);
let p2 = new Point(0,1);
let p = new Point(0,0)
console.log(getDistance2([p1,p2],p))