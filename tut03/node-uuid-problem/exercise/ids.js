// UUID package: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

// Generate 30 random UUIDs and sort them
const uuids = [];
for (let i = 0; i < 30; i++) {
  uuids.push(uuidv4());
}
uuids.sort();

// Print each UUID on a new line and count the characters
const charCounts = {};
for (const id of uuids) {
  console.log(id);

  for (const char of id) {
    if (char !== "-") {
      charCounts[char] = charCounts[char] ? charCounts[char] + 1 : 1;
    }
  }
}

// Sort characters by their frequency in descending order
const sortedChars = Object.keys(charCounts).sort(
  (a, b) => charCounts[b] - charCounts[a],
);

// Find the frequency of the 5th most common character (index 4)
const thresholdIndex = Math.min(4, sortedChars.length - 1);
const thresholdFreq = charCounts[sortedChars[thresholdIndex]];

// Filter all characters that is equal to or above this frequency (handles ties)
const topChars = sortedChars.filter(
  (char) => charCounts[char] >= thresholdFreq,
);

// Print the top characters separated by spaces
console.log(topChars.join(" "));
