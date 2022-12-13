/*
Create a function that takes an angle in radians and returns the corresponding angle in degrees.

Examples
radiansToDegrees(1) ➞ 57.29577951308232

radiansToDegrees(20) ➞ 1145.9155902616465

radiansToDegrees(50) ➞ 2864.7889756541163
*/

function radiansToDegrees(angleRads) {
  //your code

  let angleDegs = angleRads * (180 / Math.PI);
  //   console.log(`The type of angleDegs is ${typeof angleDegs}`);
  //   console.log(angleDegs);

  let answer = Number.parseFloat(angleDegs).toFixed(13);
//   let angleDegsFixed = angleDegs.toFixed(15);
//   let angleDegsNum = parseFloat(angleDegsFixed);
  console.log(answer);
}

radiansToDegrees(1);
radiansToDegrees(5);
radiansToDegrees(7);
radiansToDegrees(60);
radiansToDegrees(100);
radiansToDegrees(180);

//exports.solution = radiansToDegrees;
