/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  const maxLength = Math.max(...names.map((name) => name.length));

  const frameWidth = maxLength + 2;
  const border = "*".repeat(frameWidth + 2);
  const namesContent = names.map(
    (name) => `* ${name.padEnd(maxLength, " ")} *`
  );

  return [border, ...namesContent, border].join("\n");
}

const arrayNames = createFrame(["Aye", "Gabo", "Gina"]);
console.log(arrayNames);
