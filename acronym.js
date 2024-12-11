function generateAcronym(name) {
  /**
   * Generates an acronym for a given name.
   *
   * @param {string} name - Full name of a person.
   * @returns {string} - Generated acronym in uppercase.
   */

  // Split the name into parts by spaces and dashes
  const nameParts = name.trim().split(/[- ]+/);

  let acronym = "";

  // Iterate the parts of the name
  for (let i = 0; i < nameParts.length; i++) {
    const part = nameParts[i];

    if (i === 1 && part.toLowerCase() === "von") {
      // Handling for "von"
      acronym += "v";
    } else {
      // Add the first letter in uppercase
      acronym += part[0].toUpperCase();
    }
  }

  return acronym;
}

// Example usage:
console.log(generateAcronym("Thomas Meyer")); // Output: "TM"
console.log(generateAcronym("martin schmidt")); // Output: "MS"
console.log(generateAcronym("Jan-Erich Schmidt")); // Output: "JES"
console.log(generateAcronym("Paul Meyer-Schmidt")); // Output: "PMS"
console.log(generateAcronym("Paul von Lahnstein")); // Output: "PvL"
console.log(generateAcronym("Martin von Lahnstein-Meyer")); // Output: "MvLM"
