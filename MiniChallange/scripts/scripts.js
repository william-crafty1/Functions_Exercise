function logRectInfo(topLeft, bottomRight){
    let width = topLeft[0] - bottomRight[0];
    let length = bottomRight[1] - topLeft[1];
    let Area = length * width;
    let Perimeter = 2 * (length + width);
    return console.log(`The width is ${width}, the length is ${length}, the Area is ${Area}, and the Perimeter is ${Perimeter} `);

}

console.log("Rectangle Info:");
let RectInfo = logRectInfo([77, 5],[70, 42]);


