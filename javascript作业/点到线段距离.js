
function getDistance(line, point) {
    const [[x1,y1],[x2,y2]]= line,[x,y] = point;
    let cross = (x - x1) * (x2 - x1) + (y - y1) * (y2 - y1);//AP*AB

    if (cross < 0) {
        return Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1));//|AP|
    }
    let d = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);//AB*AB
    if (cross > d) {
        return Math.sqrt((x - x2) * (x - x2) + (y - y2) * (y - y2));//|BP|
    }
    let r = cross / d;//AC
    let px = x1 + (x2 - x1) * r;
    let py = y1 + (y2 - y1) * r;
     return Math.sqrt((x - px) * (x - px) + (py - y) * (py - y));
    //  return  Math.sqrt((x-x1)*(x-x1) + (y-y1)*(y-y1) -r*r);
}

console.log(getDistance([[0,1],[1,0]],[0,0]));