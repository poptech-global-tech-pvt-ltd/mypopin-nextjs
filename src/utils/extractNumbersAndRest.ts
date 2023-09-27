function extractNumbersAndRest(inputString : any) {
  // Use regular expression to find numbers with currency symbols or percentages
  const regex = /([₹$€£¥]?[\d,]+(\.\d+)?|%?\d+\%?)\s+(.*)/; // This regex captures numbers with currency symbols or percentages and trailing space, along with the rest of the string

  // Use match to find the first match in the input string
  const match = inputString?.match(regex);

  if (match) {
    const [fullMatch, number, rest] = match;
    return {
      value: number,
      rest: rest?.trim(), // Trim the whitespace from the rest of the string
    };
  }

  return null; // Return null if no match is found
}

export { extractNumbersAndRest }
