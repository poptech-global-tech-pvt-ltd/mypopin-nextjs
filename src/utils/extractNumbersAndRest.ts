function extractNumbersAndRest(inputString : any) {
  // Use regular expression to find numbers with currency symbols or percentages
  const regex = /([₹$€£¥]?[\d,]+(?:\.\d+)?|%?\d+\%?)\s+(.*)/; // Modified regex to capture optional decimal places

  // Use match to find the first match in the input string
  const match = inputString?.match(regex);

  if (match) {
    const [fullMatch, number, rest] = match;

    // Remove trailing ".00" if it exists
    const cleanedNumber = number.endsWith('.00') ? number.slice(0, -3) : number;

    return {
      value: cleanedNumber,
      rest: rest?.trim(), // Trim the whitespace from the rest of the string
    };
  }

  return null; // Return null if no match is found
}

export { extractNumbersAndRest }
