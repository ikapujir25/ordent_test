function getRemainder(a, b) {
  // Return NaN if one of input has value 0
  if (a === 0 || b === 0) {
    return "NaN";
  }

  // Choose which the larger and smaller between 2 input
  const larger = Math.max(a, b);
  const smaller = Math.min(a, b);

  return larger % smaller;
}

console.log(getRemainder(72, 14), "should return 2");
console.log(getRemainder(99, 18), "should return 9");
console.log(getRemainder(10, 0), "should return NaN");
