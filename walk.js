function isValidWalk(walk) {
  // Validation of direction
  if (walk.length !== 10) {
    return false;
  }

  // The coordinates for starting position
  let x = 0,
    y = 0;

  // Process each direction of walk
  for (const direction of walk) {
    switch (direction) {
      case "n":
        y += 1;
        break;
      case "s":
        y -= 1;
        break;
      case "e":
        x += 1;
        break;
      case "w":
        x -= 1;
        break;
    }
  }

  console.warn(x, y);

  // Check if we returned to the starting point
  return x === 0 && y === 0;
}

console.warn(
  isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
  "should return true"
);
console.warn(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
  "should return false because > 10"
);
console.warn(isValidWalk(["w"]), "should return false because < 10");
console.warn(
  isValidWalk(["n", "w", "e", "s", "n", "sw", "n", "e", "s", "s"]),
  "should return false because the coordinate not 0, 0"
);
