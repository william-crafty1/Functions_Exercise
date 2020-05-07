console.log("Area of a circle calculation:");
function getAreaOfCircle(radius) {
    return Math.PI * (radius * radius);
}

let AreaOfCircle = getAreaOfCircle(77); 
console.log(AreaOfCircle);

console.log("Circumference of a circle:");
function getCircleCircumference(radius){
    return 2 * Math.PI * radius;
}

let CircleCircumference = getCircleCircumference(10);
console.log(CircleCircumference);

console.log("Area of a square:");
function getAreaOfSquare(side){
    return side * side;
}
let AreaOfSquare = getAreaOfSquare(4);
console.log(AreaOfSquare);

console.log("Area of a triangle:");
function getAreaOfTriangle(base, height){
    return 1/2 * (base * height);
}

let AreaOfTriangle = getAreaOfTriangle(2, 5);
console.log(AreaOfTriangle);