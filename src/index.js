module.exports = function trapRainWater(elevationMap) {
  let pattern = /\g(w+)\g/g;
  let foundPatterns = [];
  let result = 0;
  let trapHeight = Math.max(...elevationMap);
  for (let i = 0; i < trapHeight; i++) {
    let level = [];
    elevationMap.forEach(element => {
      if (element > i) {
        level.push("gg");
      } else {
        level.push("w");
      }
    });
    let temp = level.join("").match(pattern);
    foundPatterns.push(...(temp || ""));
  }
  foundPatterns.forEach(element => {
    let temp = element.length - 2;
    result += temp;
  });
  return result;
};
