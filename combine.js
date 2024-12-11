function combineStrings(str1, str2, str3) {
  let combined = "";
  const maxLength = Math.max(str1.length, str2.length, str3.length);

  for (let i = 0; i < maxLength; i++) {
    combined += (str1[i] || "") + (str2[i] || "") + (str3[i] || "");
  }

  return combined;
}

// Example usage:
console.log(combineStrings("abc", "def", "ghi")); // Output: "adgbehcfi"
console.log(combineStrings("abc", "dcde", "efgh")); // Output: "adebcfcdgeh"
